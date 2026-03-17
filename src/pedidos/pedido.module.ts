import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';

import { PedidoController } from './controllers/pedido.controller';
import { PedidoService } from './model/service/pedido.service';


@Module({
  imports: [TypeOrmModule.forFeature([Pedido])],
   controllers: [PedidoController],
   providers: [PedidoService],
  exports: [TypeOrmModule]
})
export class PedidoModule {}