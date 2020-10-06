import axios from 'axios'
// import { API_ENDPOINT } from '@env'

let APIKit = axios.create({
  baseURL: "http://www.omdbapi.com",
  timeout: 10000,
})

export default APIKit
