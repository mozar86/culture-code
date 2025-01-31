import { Controller, Get } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get()
  home() {
    return { message: 'API está rodando! Acesse /api para a documentação' };
  }
}
