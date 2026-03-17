import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity({name:"tb_categorias"})
export class categoria{
@PrimaryGeneratedColumn()
id:number

@Column({length:255,nullable:false})
@IsNotEmpty()
nome:string

}