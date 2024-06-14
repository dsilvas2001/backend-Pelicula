import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SalaService } from 'src/sala/services/sala/sala.service';

@ApiTags('sala')
@Controller('sala')
export class SalaController {
  constructor(private _salaService: SalaService) {}

  @Get('status/:nombre')
  async getSalaStatus(@Param('nombre') nombre: string) {
    return await this._salaService.getSalaStatusByName(nombre);
  }
}
