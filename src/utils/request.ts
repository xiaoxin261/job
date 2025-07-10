import axios from 'axios'
import local from '@/store/local'
import router from '@/router'
import { message } from '@/utils/message'

interface ResponseData<T = any> {
  code: number
  msg: string
  data?: T
}

const axiosInstance: any = axios.create({
  baseURL: 'http://106.53.206.242:8089/job/',
  timeout: 10000
})

// 请求拦截器
axiosInstance.interceptors.request.use((config: any) => {
  const token = local.getToken()
  if (token) {
    config.headers = config.headers || {}
    config.headers.token = token
  }
  return config
}, (error: Error) => {
  return Promise.reject(error)
})

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: any) => {
    const res = response.data
    if (response.status === 200) {
      if (res.code === 200) {
        return res.data || res
      } else if ([401, 402].includes(res.code)) {
        message.error(res.msg)
        router.push('/login')
        return Promise.reject(new Error(res.msg))
      } else if (res.code === 500) {
        message.error(res.msg)
        return Promise.reject(new Error(res.msg))
      }
    }
    return response
  },
  (error: Error) => {
    message.error(error.message || '请求失败')
    return Promise.reject(error)
  }
)

export default axiosInstance
