import { Column, Entity, PrimaryColumn } from 'typeorm'

import { ApiHideProperty } from '@nestjs/swagger'

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryColumn()
  id!: number

  @Column({ type: 'varchar' })
  email!: string

  @Column({ type: 'varchar' })
  name!: string

  // you can try comment ```@ApiHideProperty()``` on and off several times,
  // first time swagger docs show it correct,
  // but after tried several times, the swagger docs do not change
  // then ```npm run build```, and ```npm run start:dev``` to restart it
  @Column({ type: 'varchar', default: '', select: false })
  @ApiHideProperty()
  password!: string
}
