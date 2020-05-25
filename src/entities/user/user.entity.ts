import { Column, Entity, PrimaryColumn } from 'typeorm'

import { ApiHideProperty } from '@nestjs/swagger'

export class UserEntity {
  id!: number

  email!: string

  name!: string

  // you can try comment ```@ApiHideProperty()``` on and off several times,
  // first time swagger docs show it correct,
  // but after tried several times, the swagger docs do not change
  // then ```npm run build```, and ```npm run start:dev``` to restart it
  @ApiHideProperty()
  password!: string
}
