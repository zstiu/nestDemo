import { ApiPropertyOptional } from '@nestjs/swagger'

import { UserEntity } from 'src/entities/user/user.entity'
import { ResponseBodyType } from '@/types/response.type'

export class GetCurrentUserResDto extends ResponseBodyType<UserEntity[]> {
  @ApiPropertyOptional({
    isArray: true,
    type: UserEntity
  })
  data: UserEntity[] = []
}
