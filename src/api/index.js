import axios from 'axios'
import { API_ENDPOINT } from '../CONSTRAINT'

let APIKit = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 10000,
})

export default APIKit
