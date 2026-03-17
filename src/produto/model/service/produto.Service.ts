
import { Produto } from "../../entities/produto.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";


export class produtoService{
constructor(@InjectRepository(Produto)  private readonly produto:Repository<Produto>  ){}


async findall():Promise<Produto[]>{

    return await this.produto.find({relations:{categoria:true}})
}
async findbyid(id:number):Promise<Produto|null>{

return await this.produto.findOne({where:{id}, 
relations:{
            categoria:true
        }})
}


async findbyname(nome:string):Promise<Produto[]>{

return await this.produto.find({where:{nome:ILike(`%${nome}%`)}, 
relations:{
            categoria:true
        }},)
}


async create(x:Produto):Promise<Produto>{

    return this.produto.save(x)

}

async update(x:Produto):Promise<Produto>{
 await this.findbyid(x.id)

return this.produto.save(x)
}

async delete(x:number):Promise<DeleteResult>{
return await this.produto.delete(x)

}



}