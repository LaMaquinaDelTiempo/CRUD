import { Request, Response } from "express";

export const getPersonas=(req: Request,res:Response)=>{
    
res.json({
    msg:"getPersonas",   
})
}

export const getPersona=(req: Request,res:Response)=>{

    console.log(req.params.id)
    const {id}=req.params
    res.json({
        msg:"getPersona",
        id: id
})
}
export const deletePersona=(req: Request,res:Response)=>{

    console.log(req.params.id)
    const {id}=req.params
    res.json({
        msg:"deletePersona",
        id: id
})
}
export const postPersona=(req: Request,res:Response)=>{

    console.log(req.body);
    const {id}=req.params
    res.json({
        msg:"deletPersona",
        body: req.body
})
}