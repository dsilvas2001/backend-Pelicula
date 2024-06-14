import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DateTime } from 'luxon';
import { Pelicula } from 'src/database/entities/pelicula.entity';
import {
  CreatePeliculaDto,
  UpdatePeliculaDto,
} from 'src/pelicula/dtos/pelicula.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PeliculaService {
  constructor(
    @InjectRepository(Pelicula)
    private readonly _peliculaRepository: Repository<Pelicula>,
  ) {}

  async createPelicula(peliculaDto: CreatePeliculaDto): Promise<Pelicula> {
    if (!peliculaDto.duracion || !peliculaDto.nombre) {
      throw new Error('Error en los datos');
    }
    const pelicula = new Pelicula();
    pelicula.duracion = peliculaDto.duracion;
    pelicula.nombre = peliculaDto.nombre;
    // const pelicula = this._peliculaRepository.create(peliculaDto);
    return this._peliculaRepository.save(pelicula);
  }

  async updatePelicula(
    id: number,
    peliculaDto: UpdatePeliculaDto,
  ): Promise<Pelicula> {
    await this._peliculaRepository.update(id, peliculaDto);
    return this._peliculaRepository.findOne({ where: { id } });
  }
  async deletePelicula(id: number) {
    const pelicula = await this._peliculaRepository.findOneBy({ id: id });
    if (!pelicula) {
      return {
        message: 'No existe la pelicula',
      };
    }
    try {
      await this._peliculaRepository.softDelete({ id: pelicula.id });
    } catch {
      return {
        message: 'Error al eliminar la pelicula',
      };
    }

    return {
      message: 'Pelicula eliminada',
    };
  }

  async getAllPelicula() {
    return this._peliculaRepository.find();
  }

  async searchPelicula(idSala: number, nombrePelicula: string) {
    if (!idSala || !nombrePelicula) {
      throw new Error('Los campos son requeridos');
    }
    const result = await this._peliculaRepository.findOne({
      where: {
        nombre: nombrePelicula,
        peliculaSalaCine: { salacine: { id: idSala } },
      },
    });

    return result;
  }

  async presentPelicula(fechaPresentacion: string) {
    const formattedDate = DateTime.fromFormat(fechaPresentacion, 'dd/LL/yyyy')
      .toISO()
      .split('T')[0];
    const result = this._peliculaRepository
      .createQueryBuilder('Pelicula')
      .leftJoinAndSelect('Pelicula.peliculaSalaCine', 'peliculaSalaCine')
      .where('DATE(peliculaSalaCine.fecha_publicacion) = :fecha', {
        fecha: formattedDate,
      })
      .getMany();

    return result;
  }
}
