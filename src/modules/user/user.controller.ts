import { Body, Controller, Get, Param, Post, Patch, UseGuards, Request } from '@nestjs/common'
import { UserService } from './user.service'
import { ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger'
import { GetCurrentUserResDto } from './dto/user.dto'
import { SuccessResponseBody } from '@/common/response.body'
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOkResponse({
    description: 'get current logined user info',
    type: GetCurrentUserResDto
  })
  async getCurrentUser(@Request() req: any): Promise<GetCurrentUserResDto> {
    // return new SuccessResponseBody(req.user)
    return new SuccessResponseBody([])
  }
}
