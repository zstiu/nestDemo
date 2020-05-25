import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserController } from './user.controller'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [],
  providers: [],
  controllers: [UserController],
  exports: []
})
export class UserModule {}
