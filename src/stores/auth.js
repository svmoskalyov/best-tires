import { ref } from 'vue'
import { defineStore } from 'pinia'
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
      // console.log(response.data)
    } catch (err) {
      switch (err.response.data.error.message) {
        case 'EMAIL_EXISTS':
          error.value = 'Email exists'
          console.log(error.value)
          break
        case 'OPERATION_NOT_ALLOWED':
          error.value = 'Operation not allowed'
          console.log(error.value)
          break
        case 'EMAIL_NOT_FOUND':
          error.value = 'Email not found'
          console.log(error.value)
          break
        case 'INVALID_PASSWORD':
          error.value = 'Invalid password'
          console.log(error.value)
          break
        default:
          error.value = 'Error'
          console.log(error.value)
          break
      }
      throw error.value
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
