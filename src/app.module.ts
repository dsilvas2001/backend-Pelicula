import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { PeliculaModule } from './pelicula/pelicula.module';
import { SalaModule } from './sala/sala.module';

@Module({
  imports: [DatabaseModule, PeliculaModule, SalaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
