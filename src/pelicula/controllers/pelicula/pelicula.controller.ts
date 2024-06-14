import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Pelicula } from 'src/database/entities/pelicula.entity';
import {
  CreatePeliculaDto,
  UpdatePeliculaDto,
} from 'src/pelicula/dtos/pelicula.dto';
import { PeliculaService } from 'src/pelicula/services/pelicula/pelicula.service';

@ApiTags('pelicula')
@Controller('pelicula')
export class PeliculaController {
  constructor(private _peliculaService: PeliculaService) {}

  @Post()
  async createPelicula(@Body() peliculaDto: CreatePeliculaDto) {
    try {
      return await this._peliculaService.createPelicula(peliculaDto);
    } catch (err) {
      return {
        message: err.message,
      };
    }
  }

  @Put(':id')
  async updatePelicula(
    @Param('id') id: number,
    @Body() peliculaDto: UpdatePeliculaDto,
  ): Promise<Pelicula> {
    return await this._peliculaService.updatePelicula(id, peliculaDto);
  }

  @Delete(':id')
  async deletePelicula(@Param('id') id: number) {
    return await this._peliculaService.deletePelicula(id);
  }

  @Get()
  async getAllPelicula() {
    return await this._peliculaService.getAllPelicula();
  }

  @Get('search')
  async getPeliculaSearch(
    @Query('id_sala', ParseIntPipe) idSala: number,
    @Query('nombre_pelicula') nombrePelicula: string,
  ) {
    return await this._peliculaService.searchPelicula(idSala, nombrePelicula);
  }

  @Get('present')
  async getPresetPelicula(
    @Query('fecha_publicacion') fechaPresentacion: string,
  ) {
    return await this._peliculaService.presentPelicula(fechaPresentacion);
  }
}
