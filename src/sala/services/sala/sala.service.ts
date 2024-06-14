import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalaCine } from 'src/database/entities/sala_cine.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SalaService {
  constructor(
    @InjectRepository(SalaCine)
    private readonly _salaRepository: Repository<SalaCine>,
  ) {}

  async getSalaStatusByName(nombre: string) {
    let mensaje: string;
    const sala = await this._salaRepository.findOne({
      where: { nombre: nombre },
      relations: ['peliculaSalaCine'],
    });

    if (!sala) {
      throw new NotFoundException('Sala no encontrada');
    }

    const peliculaCount = sala.peliculaSalaCine.length;

    if (peliculaCount < 3) {
      mensaje = 'Sala casi Vacía';
    } else if (peliculaCount >= 3 && peliculaCount <= 5) {
      mensaje = 'Sala casi Llena';
    } else {
      mensaje = 'Sala Llena';
    }

    return {
      message: mensaje,
    };
  }
}
