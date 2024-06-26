import { Controller, Get, UseGuards } from "@nestjs/common"
import { AppService } from "./app.service"
import { AuthGuard } from "./auth/auth.guard"

@Controller()
@UseGuards(AuthGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  privateRoute(): string {
    return this.appService.privateRoute()
  }
}
