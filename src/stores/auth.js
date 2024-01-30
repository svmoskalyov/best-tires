import { ref } from 'vue'
import { defineStore } from 'pinia'
import { notify } from '@kyvg/vue3-notification'
import firebase from '@/services/firebase'
import axiosApiInstance from '@/services/axios'

export const useAuthStore = defineStore('auth', () => {
  const error = ref('')
  const loader = ref(false)
  const userInfo = ref({
    token: '',
    email: '',
    userId: '',
    refreshToken: ''
  })

  const auth = async (payload, type) => {
    const stringUrl = type === 'signin' ? 'signInWithPassword' : 'signUp'
    error.value = ''
    loader.value = true

    try {
      let response = await axiosApiInstance.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${firebase.apiKey}`,
        {
          ...payload,
          returnSecureToken: true
        }
      )

      userInfo.value = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken
      }

      localStorage.setItem(
        'userTokens',
        JSON.stringify({
          token: userInfo.value.token,
          refreshToken: userInfo.value.refreshToken
        })
      )

      notify({
        title: 'Welcome!',
        text: response.data.email,
        type: 'success'
      })
    } catch (err) {
      switch (err.response.data.error.message) {
        case 'EMAIL_EXISTS':
          error.value = 'Email exists'
          break
        case 'OPERATION_NOT_ALLOWED':
          error.value = 'Operation not allowed'
          break
        case 'EMAIL_NOT_FOUND':
          error.value = 'Email not found'
          break
        case 'INVALID_PASSWORD':
          error.value = 'Invalid password'
          break
        case 'INVALID_LOGIN_CREDENTIALS':
          error.value = 'Invalid login credentials'
          break
        default:
          error.value = 'Undetected error'
          break
      }

      notify({
        title: 'ERROR',
        text: error.value,
        type: 'error'
      })
    } finally {
      loader.value = false
    }
  }

  const signout = () => {
    userInfo.value = {
      token: '',
      email: '',
      userId: '',
      refreshToken: ''
    }
    localStorage.removeItem('userTokens')
  }

  return { auth, userInfo, error, loader, signout }
})
