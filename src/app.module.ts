import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule],
})
export class AppModule {}
