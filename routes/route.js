import express from "express";
const router = express.Router();
import controller from "../controllers/controller.js";
const controle = new controller();

router.get("/", controle.admin);
router.get("/site", controle.home);
router.post("/formulario", controle.formulario);
export default router;
