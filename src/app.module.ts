import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoria } from './categoria/entities/categoria.entity';
import { categoriaModule } from './categoria/categoria.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    port:3306,
    username:"root",
    password:"root",
    host:'localhost',
    synchronize:true,
    entities:[categoria],
    database:'db_farmacia'

  }),
categoriaModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
