import express from "express";
const router = express.Router();
import controller from "../controllers/controller.js";
const controle = new controller();

router.get("/", controle.admin);
router.get("/site", controle.home);
router.get("/site/agenda", controle.agenda);
router.get("/site/stats", controle.stats);
router.get("/site/about", controle.about);
router.post("/formulario", controle.formulario);
export default router;
