import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { UserEntity } from 'src/entities/user/user.entity'
import { UserRepository } from 'src/entities/user/user.repository'

@Injectable()
export class UserService extends TypeOrmCrudService<UserEntity> {
  constructor(public readonly userRepository: UserRepository) {
    super(userRepository)
  }
}
