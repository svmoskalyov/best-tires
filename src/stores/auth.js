import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'
import firebase from '@/services/firebase'

export const useAuthStore = defineStore('auth', () => {
  const error = ref('')
  const loader = ref(false)
  const userInfo = ref({
    token: '',
    email: '',
    userId: '',
    refreshToken: ''
  })

  const signup = async payload => {
    error.value = ''
    loader.value = true

    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebase.apiKey}`,
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

      console.log(response.data)
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

  return { signup, userInfo, error, loader }
})
