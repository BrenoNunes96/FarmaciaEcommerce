import { InjectRepository } from "@nestjs/typeorm";
import { categoria } from "../../entities/categoria.entity";
import { DeleteResult, Repository } from "typeorm";
import { HttpException, HttpStatus } from "@nestjs/common";

export class categoriaService{
constructor(@InjectRepository(categoria)  private  categoria:Repository<categoria>){}


async findall():Promise<categoria[]>{

return await this.categoria.find()

}
async findbyid(id:number):Promise<categoria|null>{
return await this.categoria.findOne({where:{id}})

}

async create(x:categoria):Promise<categoria>{
const categoriaCadastro = await this.findbyid(x.id)
if(categoriaCadastro){
   throw new HttpException("categoria ja cadastrada",HttpStatus.NOT_ACCEPTABLE)
}

return this.categoria.save(x)


}

async update(x:categoria):Promise<categoria>{   
const categoriabusca = await this.findbyid(x.id)
if(categoriabusca && categoriabusca.id !== x.id){
    throw new HttpException("essa categoria ja foi cadastrada",HttpStatus.BAD_REQUEST)
}

return await this.categoria.save(x)

}


async delete(id:number):Promise<DeleteResult>{

return this.categoria.delete(id)

}

async findbyname(nome:string):Promise<categoria[]>{

    return this.categoria.find({where:{nome}})


}




}