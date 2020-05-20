import { Controller, Get } from '@nestjs/common'
import { RootAppService } from './rootApp.service'

@Controller('api')
export class RootAppController {
  constructor(private readonly appService: RootAppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
