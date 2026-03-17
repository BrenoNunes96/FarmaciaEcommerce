"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevService = void 0;
const common_1 = require("@nestjs/common");
const postagem_entity_1 = require("../../postagem/entities/postagem.entity");
const tema_entity_1 = require("../../tema/entities/tema.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
let DevService = class DevService {
    createTypeOrmOptions() {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_blogpessoal',
            entities: [postagem_entity_1.Postagem, tema_entity_1.tema, usuario_entity_1.Usuario],
            synchronize: true,
        };
    }
};
exports.DevService = DevService;
exports.DevService = DevService = __decorate([
    (0, common_1.Injectable)()
], DevService);
//# sourceMappingURL=dev.service.js.map