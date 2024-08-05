import { Request, Response } from "express";

export const getPersonas=(req: Request,res:Response)=>{
    
res.json({
    msg:"getPersonas",   
})
}

export const getPersona=(req: Request,res:Response)=>{

    console.log(req.params.id)
    
    res.json({
        msg:"getPersona",
        id: req.params.id
})
}