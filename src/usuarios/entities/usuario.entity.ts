import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Pedido } from "../../pedidos/entities/pedido.entity";


@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    @ApiProperty() 
    id: number;

    @IsNotEmpty()
    @Column({length: 255}) 
    @ApiProperty() 
    nome: string;

    @IsEmail()
    @Column({length: 255})
    @ApiProperty() 
    usuario: string;

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255}) 
    @ApiProperty() 
    senha: string;
    
    @ApiProperty() 
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    foto: string;
    
    // RELAÇÃO COM PEDIDO (1 Usuário tem Muitos Pedidos)
    @ApiProperty({ type: () => Pedido, isArray: true })
    @OneToMany(() => Pedido, (pedido) => pedido.usuario)
    pedidos: Pedido[];

}