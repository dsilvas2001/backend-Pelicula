import { BaseTable } from './../../common/base.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pelicula } from './pelicula.entity';
import { SalaCine } from './sala_cine.entity';

@Entity()
export class PeliculaSalaCine extends BaseTable {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pelicula, (pelicula) => pelicula.peliculaSalaCine)
  pelicula: Pelicula;

  @ManyToOne(() => SalaCine, (salacine) => salacine.peliculaSalaCine)
  salacine: SalaCine;

  @Column()
  fecha_publicacion: Date;

  @Column()
  fecha_fin: Date;
}
