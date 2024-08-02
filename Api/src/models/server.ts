import express,{Application} from 'express';
class server{
    private app: Application;
    private port:string;
    constructor(){
        this.app=express();
        this.port=process.env.PORT||'4000';

    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('aplicacion corriendo en el puerto', this.port);
            
        })
    }

}
export default server;