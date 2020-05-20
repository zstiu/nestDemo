import { Injectable } from '@nestjs/common'

@Injectable()
export class RootAppService {
  getHello(): string {
    return 'Hello World!'
  }
}
