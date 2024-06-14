import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { SalaCine } from './entities/sala_cine.entity';
import { PeliculaSalaCine } from './entities/pelicula_salacine.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-weathered-water-a5xdq53e.us-east-2.aws.neon.tech',
      port: 5432,
      username: 'prueba_owner',
      password: 'WOxjXRzDv0n1',
      database: 'prueba',
      entities: [Pelicula, SalaCine, PeliculaSalaCine],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
  ],
})
export class DatabaseModule {}
