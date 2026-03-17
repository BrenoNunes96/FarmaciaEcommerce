import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./entities/produto.entity";
import { categoria } from "../categoria/entities/categoria.entity";
import { produtoService } from "./model/service/produto.Service";
import { ProdutoController } from "./controller/produto.controller";

@Module({
imports:[TypeOrmModule.forFeature([Produto,categoria]) ],
providers:[produtoService],
controllers:[ProdutoController],
exports:[produtoService]
})
export class produtoModule{}