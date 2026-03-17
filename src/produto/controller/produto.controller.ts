import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { DeleteResult } from "typeorm";
import { Produto } from "../entities/produto.entity";
import { produtoService } from "../model/service/produto.Service";

@Controller("/produtos")
export class ProdutoController {
  constructor(private readonly produtoService: produtoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findall(): Promise<Produto[]> {
    return this.produtoService.findall();
  }

  @Get("/:id")
  @HttpCode(HttpStatus.OK)
  findbyid(@Param("id", ParseIntPipe) id: number): Promise<Produto | null> {
    return this.produtoService.findbyid(id);
  }

  @Post("/criar")
  @HttpCode(HttpStatus.CREATED)
  create(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.create(produto);
  }

  @Put("/atualizar")
  update(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.update(produto);
  }

  @Get("/nome/:nome")
  @HttpCode(HttpStatus.OK)
  findbyname(@Param("nome") nome: string): Promise<Produto[]> { 
    return this.produtoService.findbyname(nome);
  }

  @Delete("/deletar/:id")
  @HttpCode(HttpStatus.OK)
  delete(@Param("id", ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.produtoService.delete(id);
  }
}