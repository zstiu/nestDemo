import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { UserModule } from './modules/user/user.module'
import { UserEntity } from './entities/user/user.entity'
import { RootAppController } from './rootApp.controller'
import { RootAppService } from './rootApp.service'

@Module({
  imports: [UserModule],
  controllers: [RootAppController],
  providers: [RootAppService]
})
export class RootAppModule {}
