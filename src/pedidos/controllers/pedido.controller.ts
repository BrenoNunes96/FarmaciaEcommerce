import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { PedidoService } from '../model/service/pedido.service';
import { Pedido } from '../entities/pedido.entity';

@ApiTags('Pedido')
@Controller('/pedidos')
export class PedidoController {
    constructor(private readonly pedidoService: PedidoService) {}

    @Post('/cadastrar')
    @HttpCode(HttpStatus.CREATED) // Retorna 201 Created quando dá certo
    create(@Body() pedido: Pedido): Promise<Pedido> {
        return this.pedidoService.create(pedido);
    }

    @Get('/all')
    @HttpCode(HttpStatus.OK) // Retorna 200 OK
    findAll(): Promise<Pedido[]> {
        return this.pedidoService.findAll();
    }
}