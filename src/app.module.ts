import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoria } from './categoria/entities/categoria.entity';
import { categoriaModule } from './categoria/categoria.module';
import { produtoModule } from './produto/produto.module';
import { Produto } from './produto/entities/produto.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    port:3306,
    username:"root",
    password:"root",
    host:'localhost',
    synchronize:true,
    entities:[Produto,categoria],
    database:'db_farmacia'

  }),
categoriaModule,
produtoModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
