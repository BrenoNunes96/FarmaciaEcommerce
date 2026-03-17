import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioController } from "./controller/usuario.controller";
import { UsuarioService } from "./model/service/usuario.service";
import { Produto } from "../produto/entities/produto.entity";
import { Bcrypt } from "../auth/bcrypt/bcrypt";

@Module({
    imports:[TypeOrmModule.forFeature([Usuario,Produto])],
    exports:[UsuarioService],
    providers:[UsuarioService,Bcrypt],
    controllers:[UsuarioController]
})

export class UsuarioModule{}