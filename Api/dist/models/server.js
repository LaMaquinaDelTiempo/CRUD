"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const persona_route_1 = __importDefault(require("../routes/persona.route"));
class server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.middlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('aplicacion corriendo en el puerto', this.port);
        });
    }
    middlewares() {
        //parseo del body
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use('/api/personas', persona_route_1.default);
    }
}
exports.default = server;
