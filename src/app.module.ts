import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoria } from './categoria/entities/categoria.entity';
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

  })

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
