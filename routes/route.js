import express from "express";
const router = express.Router();
import GeralController from "../controllers/controller.js";
const controle = new GeralController();

router.get("/", controle.admin);
router.get("/site", controle.home);
router.get("/site/pros", controle.pros);
router.get("/site/stats", controle.stats);
router.get("/site/about", controle.about);
router.post("/formulario", controle.formulario);
export default router;
