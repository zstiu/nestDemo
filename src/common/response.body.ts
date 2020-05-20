import { ResponseBodyType } from 'src/types/response.type'
import { statusCodeEnum } from 'src/constants/request'

// 成功的请求code固定为0
export class SuccessResponseBody<T> implements ResponseBodyType<T> {
  constructor(data: T, message?: string, error?: string) {
    this.statusCode = statusCodeEnum.SUCCESS
    this.data = data
    this.error = error || ''
    this.message = message || ''
  }

  statusCode: statusCodeEnum
  data: T
  error: string
  message: string
}

// 失败的请求code固定为-1
export class FailedResponseBody<T> implements ResponseBodyType<T> {
  constructor(error: string, data?: T, message?: string) {
    this.statusCode = statusCodeEnum.FAILD
    this.data = data
    this.error = error || ''
    this.message = message || ''
  }

  statusCode: statusCodeEnum
  data?: T
  error: string
  message: string
}
