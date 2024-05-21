import axios from 'axios'

const request = axios.create({
//   baseURL: import.meta.env.REACT_APP_SERVER_URL
})

// config headers
const AUTH_TOKEN = 'default_value'

request.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
request.defaults.timeout = 3000

// Add a request interceptor
request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default request
