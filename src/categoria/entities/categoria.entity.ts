import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({name:"tb_categorias"})
export class categoria{
@PrimaryGeneratedColumn()
id:number

@Column({length:255,nullable:false})
@IsNotEmpty()
nome:string

@OneToMany(()=>Produto ,(produto)=>produto.categoria)
produtos:Produto[]
}