import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { categoriaService } from "./model/service/categoria.service";
import { categoriController } from "./controllers/categoria.controller";
import { categoria } from "./entities/categoria.entity";

@Module({
imports:[TypeOrmModule.forFeature([categoria])],
providers:[categoriaService],
controllers:[categoriController],
exports:[categoriaService]


})
export class categoriaModule{}