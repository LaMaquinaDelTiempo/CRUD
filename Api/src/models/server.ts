import express,{Application} from 'express';
import routerPersonas from '../routes/persona.route';

class server{
    private app: Application;
    private port:string;
    constructor(){
        this.app=express();
        this.port=process.env.PORT||'4000';
        this.routes();

    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('aplicacion corriendo en el puerto', this.port);
            
        })
    }

    routes(){
        this.app.use('/api/personas',routerPersonas)
    }

}
export default server;