import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todo')
  getData() {
    return this.appService.getData();
  }

  @Post('todo')
  addTodo() {
    return this.appService.addTodo()
  }
}
