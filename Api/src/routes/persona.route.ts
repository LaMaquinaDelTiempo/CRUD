import { Router } from "express";
import { deletePersona, getPersona, getPersonas } from "../controllers/persona.controller";


const router=Router();
router.get('/',getPersonas);
router.get('/:id',getPersona);
router.delete('/:id',deletePersona);
export default router;