import { Router } from "express";
import { deletePersona, getPersona, getPersonas, postPersona } from "../controllers/persona.controller";


const router=Router();
router.get('/',getPersonas);
router.get('/:id',getPersona);
router.delete('/:id',deletePersona);
router.post('/',postPersona);
export default router;