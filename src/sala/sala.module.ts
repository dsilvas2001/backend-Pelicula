import { Module } from '@nestjs/common';
import { SalaController } from './controllers/sala/sala.controller';
import { SalaService } from './services/sala/sala.service';
import { SalaCine } from 'src/database/entities/sala_cine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SalaController],
  providers: [SalaService],
  imports: [TypeOrmModule.forFeature([SalaCine])],
})
export class SalaModule {}
