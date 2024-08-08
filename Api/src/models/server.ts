import express,{Application} from 'express';
import routerPersonas from '../routes/persona.route';

class server{
    private app: Application;
    private port:string;
    constructor(){
        this.app=express();
        this.port=process.env.PORT||'4000';
        this.middlewares();
        this.routes();

    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('aplicacion corriendo en el puerto', this.port);
            
        })
    }
    middlewares(){
        //parseo del body
        this.app.use(express.json())
    }

    routes(){
        this.app.use('/api/personas',routerPersonas)
    }

}
export default server;