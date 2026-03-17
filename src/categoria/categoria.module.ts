import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { categoriaService } from "./model/service/categoria.service";
import { categoriController } from "./controllers/categoria.controller";
import { categoria } from "./entities/categoria.entity";
import { Produto } from "../produto/entities/produto.entity";

@Module({
imports:[TypeOrmModule.forFeature([categoria,Produto])],
providers:[categoriaService],
controllers:[categoriController],
exports:[categoriaService]


})
export class categoriaModule{}