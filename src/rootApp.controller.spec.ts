import { Test, TestingModule } from '@nestjs/testing'
import { RootAppController } from './rootApp.controller'
import { RootAppService } from './rootApp.service'

describe('RootAppController', () => {
  let appController: RootAppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RootAppController],
      providers: [RootAppService],
    }).compile()

    appController = app.get<RootAppController>(RootAppController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!')
    })
  })
})
