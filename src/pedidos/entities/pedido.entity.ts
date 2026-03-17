import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, CreateDateColumn } from "typeorm";
import { Usuario } from "../../usuarios/entities/usuario.entity";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({name: "tb_pedidos"})
export class Pedido {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @CreateDateColumn()
    @ApiProperty()
    data_pedido: Date;


    @ApiProperty({ type: () => Usuario })
    @ManyToOne(() => Usuario, (usuario) => usuario.pedidos)
    usuario: Usuario;

 
    @ApiProperty({ type: () => Produto, isArray: true })
    @ManyToMany(() => Produto)
    @JoinTable({ name: "tb_itens_pedido" }) 
    produtos: Produto[];

}