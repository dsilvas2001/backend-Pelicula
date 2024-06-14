import { BaseTable } from './../../common/base.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PeliculaSalaCine } from './pelicula_salacine.entity';

@Entity()
export class SalaCine extends BaseTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ default: true })
  estado: boolean;

  @OneToMany(
    () => PeliculaSalaCine,
    (PeliculaSalaCine) => PeliculaSalaCine.salacine,
  )
  peliculaSalaCine: PeliculaSalaCine[];
}
