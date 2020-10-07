import axios from 'axios'

const API_ENDPOINT = "http://www.omdbapi.com"

let APIKit = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 10000,
})

export default APIKit
