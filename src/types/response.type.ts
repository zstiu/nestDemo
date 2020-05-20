import { ApiPropertyOptional } from '@nestjs/swagger'
import { statusCodeEnum } from 'src/constants/request'

export class ResponseBodyType<T> {
  @ApiPropertyOptional({
    description: '包含返回的数据'
    // type: T,
  })
  data?: T | {}

  @ApiPropertyOptional({
    description: '可以包含一些提醒信息'
  })
  message?: string

  @ApiPropertyOptional({
    description: '当发生错误时的错误信息'
  })
  error?: string
}
