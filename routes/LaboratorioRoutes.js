import express from "express";
const router = express.Router();

import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

import LaboratorioController from "../controllers/LaboratorioController.js";
const controle = new LaboratorioController();

const caminhobase = "Laboratorio/";

router.get("/" + caminhobase + "add", controle.openAdd);
router.post("/" + caminhobase + "add", upload.single("logo"), controle.add);
router.get("/" + caminhobase + "lst", controle.list);
router.post("/" + caminhobase + "lst", controle.find);
router.get("/" + caminhobase + "edt/:id", controle.openEdt);
router.post("/" + caminhobase + "edt/:id", controle.Edt);
router.get("/" + caminhobase + "del/:id", controle.Excluir);
export default router;
