import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { categoria } from "../entities/categoria.entity";
import { categoriaService } from "../model/service/categoria.service";
import { DeleteResult } from "typeorm";

@Controller("/categoria")
export class categoriController{
    constructor(private readonly categoriaService:categoriaService){}


    @Get()
    @HttpCode(HttpStatus.OK)
    findall():Promise<categoria[]>{
return this.categoriaService.findall()
    }

@Get("/:id")
@HttpCode(HttpStatus.OK)
findbyid(@Param("id", ParseIntPipe) id:number ):Promise<categoria|null>{
return this.categoriaService.findbyid(id)

}

@Post("/criar")
@HttpCode(HttpStatus.CREATED)
create(@Body() categoria:categoria):Promise<categoria>{
return this.categoriaService.create(categoria)
}

@Put("/atualizar")
update(@Body() categoria:categoria):Promise<categoria>{

return this.categoriaService.update(categoria)

}


@Get("/nome/:nome")
@HttpCode(HttpStatus.OK)
finbyname(x:string):Promise<categoria>{

return this.finbyname(x)

}



@Delete("/deletar/:id")
@HttpCode(HttpStatus.OK)
delete(@Param("id", ParseIntPipe) id:number):Promise<DeleteResult>{

return this.categoriaService.delete(id)

}




}