import { Module } from '@nestjs/common';
import { PeliculaController } from './controllers/pelicula/pelicula.controller';
import { PeliculaService } from './services/pelicula/pelicula.service';
import { Pelicula } from 'src/database/entities/pelicula.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PeliculaController],
  providers: [PeliculaService],
  imports: [TypeOrmModule.forFeature([Pelicula])],
})
export class PeliculaModule {}
