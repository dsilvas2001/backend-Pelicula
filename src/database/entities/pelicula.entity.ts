import { BaseTable } from './../../common/base.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PeliculaSalaCine } from './pelicula_salacine.entity';

@Entity()
export class Pelicula extends BaseTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  duracion: number;

  @OneToMany(
    () => PeliculaSalaCine,
    (PeliculaSalaCine) => PeliculaSalaCine.pelicula,
  )
  peliculaSalaCine: PeliculaSalaCine[];
}
