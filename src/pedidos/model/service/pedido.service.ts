import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from '../../entities/pedido.entity';


@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(Pedido)
        private pedidoRepository: Repository<Pedido>
    ) {}

    // Método para criar um novo pedido
    async create(pedido: Pedido): Promise<Pedido> {
        return await this.pedidoRepository.save(pedido);
    }

    // Método para listar todos os pedidos (trazendo quem comprou e os produtos)
    async findAll(): Promise<Pedido[]> {
        return await this.pedidoRepository.find({
            relations: {
                usuario: true,
                produtos: true
            }
        });
    }
}