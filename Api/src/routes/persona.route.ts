import { Router } from "express";
import { getPersona, getPersonas } from "../controllers/persona.controller";


const router=Router();
router.get('/',getPersonas);
router.get('/:id',getPersona);
export default router;