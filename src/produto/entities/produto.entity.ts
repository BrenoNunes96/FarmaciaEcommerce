import {  IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { categoria } from "../../categoria/entities/categoria.entity";

@Entity({name:"tb_produtos"})
export class Produto{

@PrimaryGeneratedColumn()
id:number   

@IsNotEmpty()
@Column({length:255,nullable:false})
nome:string

@IsNotEmpty()
@Column({nullable:false})
preco:number

@IsNotEmpty()
@Column({length:500,nullable:false})
descricao:string


@ManyToOne(()=>categoria,(categoria)=>categoria.produtos)

categoria:categoria

}