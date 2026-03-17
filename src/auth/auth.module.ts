import { forwardRef, Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";

import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants/constants";
import { AuthService } from "./services/authServices";
import { AuthController } from "./controllers/authController";
import { LocalStrategy } from "./strategy/local.strategy";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { UsuarioModule } from "../usuarios/usuario.module";

@Module({
    imports: [
        forwardRef(() => UsuarioModule),     // colocamos forwardref para a importação seguid respcetivamente passportmodule,jwtmodule
        PassportModule,                     
        JwtModule.register({
            secret: jwtConstants.secret,        // secretkey
            signOptions: {expiresIn: "1h"},       // expira em 1h
        })

    ],
    controllers: [AuthController],
    providers: [Bcrypt, AuthService, LocalStrategy,JwtStrategy],
    exports: [Bcrypt],
})
export class AuthModule {};