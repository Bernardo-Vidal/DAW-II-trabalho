import express from "express";
const router = express.Router();

import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

import ProfissionalController from "../controllers/ProfissionalController.js";
const controle = new ProfissionalController();

const caminhobase = "Profissional/";

router.get("/" + caminhobase + "add", controle.openAdd);
router.post("/" + caminhobase + "add", controle.add);
router.get("/" + caminhobase + "lst", controle.list);
router.post("/" + caminhobase + "lst", controle.find);
router.get("/" + caminhobase + "edt/:id", controle.openEdt);
router.get("/" + caminhobase + "edt/:id", controle.Edt);
router.post("/" + caminhobase + "edt/:id", controle.Edt);
router.get("/" + caminhobase + "del/:id", controle.Excluir);
router.post("/" + caminhobase + "add", upload.single("foto"), controle.add);
export default router;
