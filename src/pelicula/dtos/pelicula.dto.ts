import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePeliculaDto {
  @IsNotEmpty({ message: 'El nombre de la película no puede estar vacío.' })
  @IsString({
    message: 'El nombre de la película debe ser una cadena de texto.',
  })
  nombre: string;

  @IsNotEmpty({ message: 'La duración de la película no puede estar vacía.' })
  @IsNumber({}, { message: 'La duración de la película debe ser un número.' })
  duracion: number;
}

export class UpdatePeliculaDto extends PartialType(CreatePeliculaDto) {}
