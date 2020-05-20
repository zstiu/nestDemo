import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { UserModule } from './modules/user/user.module'
import { UserEntity } from './entities/user/user.entity'
import { RootAppController } from './rootApp.controller'
import { RootAppService } from './rootApp.service'

// change the options to your mysql database options
const databaseOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'mysql',
  entities: [UserEntity],
  autoLoadEntities: true
}

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(databaseOptions)],
  controllers: [RootAppController],
  providers: [RootAppService]
})
export class RootAppModule {
  constructor(private readonly connection: Connection) {}
}
