/* eslint-disable comma-dangle */
import axios from 'axios'
import { API_URL } from 'react-native-dotenv'
import AsyncStorage from '@react-native-community/async-storage'

const apiUrl = API_URL

const client = axios.create({
  baseURL: apiUrl
})

client.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return Promise.resolve(config)
})

// client.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response.status === 401) {
//       RootNavigation.navigate(ROUTENAMES.UNAUTHORIZED)
//     }
//     return Promise.reject(error)
//   }
// )

export default client
