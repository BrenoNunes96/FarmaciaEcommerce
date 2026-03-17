import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import{ConfigModule} from"@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoria } from './categoria/entities/categoria.entity';
import { categoriaModule } from './categoria/categoria.module';
import { produtoModule } from './produto/produto.module';
import { Produto } from './produto/entities/produto.entity';
import { UsuarioModule } from './usuarios/usuario.module';
import { Usuario } from './usuarios/entities/usuario.entity';
import { AuthModule } from './auth/auth.module';
import { PedidoModule } from './pedidos/pedido.module';
import { Pedido } from './pedidos/entities/pedido.entity';
import { ProdService } from './data/services/prod.service';
@Module({
  imports:[ConfigModule.forRoot(),
TypeOrmModule.forRootAsync({
	useClass: ProdService,
    imports: [ConfigModule],
}),
categoriaModule,
produtoModule,
UsuarioModule,
AuthModule,
PedidoModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
