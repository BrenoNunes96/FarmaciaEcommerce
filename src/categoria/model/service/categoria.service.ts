import { InjectRepository } from "@nestjs/typeorm";
import { categoria } from "../../entities/categoria.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { HttpException, HttpStatus } from "@nestjs/common";

export class categoriaService{
constructor(@InjectRepository(categoria)  private  categoria:Repository<categoria>){}


async findall():Promise<categoria[]>{

return await this.categoria.find()

}
async findbyid(id:number):Promise<categoria|null>{
return await this.categoria.findOne({where:{id},  
    relations:{
            produtos:true
        }})

}

async create(x:categoria):Promise<categoria>{
const categoriaCadastro = await this.findbyid(x.id)
if(categoriaCadastro){
   throw new HttpException("categoria ja cadastrada",HttpStatus.NOT_ACCEPTABLE)
}

return await this.categoria.save(x)


}

async update(x:categoria):Promise<categoria>{   
    await this.findbyid(x.id)
const categoriabusca = await this.findbyname(x.nome) // categoria com o nome mesma que estamo que estamos atualizando

if(categoriabusca && categoriabusca.id !== x.id){  // ** caso o id de categoribusca seja diferente da catego que estamos enviando entao ja foi cadastrado
    throw new HttpException("essa categoria ja foi cadastrada",HttpStatus.BAD_REQUEST) //
}

return await this.categoria.save(x)

}


async delete(id:number):Promise<DeleteResult>{

return  await this.categoria.delete(id)

}

async findbyname(nome:string):Promise<categoria|null>{

    return  await this.categoria.findOne({
        where:{nome:ILike(`%${nome}%`)},
        relations:{
            produtos:true
        }
    
    })


}




}