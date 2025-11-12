//importar o Model
import Lote from "../models/Lote.js";
import Laboratorio from "../models/Laboratorio.js";

export default class LoteController {
    constructor(caminhoBase = "Lote/") {
        this.caminhoBase = caminhoBase;

        this.openAdd = async (req, res) => {
            const resultado = await Laboratorio.find({});
            res.render(caminhoBase + "add", { Laboratorio: resultado });
        };
        this.Excluir = async (req, res) => {
            await Lote.findByIdAndDelete(req.params.id);
            res.redirect("/" + this.caminhoBase + "lst");
        };
        this.add = async (req, res) => {
            var laboratorio = null;

            if (req.body.laboratorio != null) {
                laboratorio = await Laboratorio.findById(req.body.laboratorio);
            }

            await Lote.create({
                codigo: req.body.codigo,
                validade: req.body.validade,
                laboratorio: laboratorio,
            });
            res.redirect("/" + caminhoBase + "add");
        };
        this.list = async (req, res) => {
            const laboratorio = await laboratorio.find({});
            const resultado = await Lote.find({}).populate("laboratorio");

            res.render(caminhoBase + "lst", {
                Lotes: resultado,
                Laboratorio: laboratorio,
            });
        };
        this.openEdt = async (req, res) => {
            //passar quem eu quero editar
            const id = req.params.id;
            const Lote = await Lote.findById(id);
            const Laboratorio = await Laboratorio.find({});
            console.log(Lote);
            res.render(caminhoBase + "edt", {
                Lote: Lote,
                Laboratorio: Laboratorio,
            });
        };
        this.Edt = async (req, res) => {
            var laboratorio = null;

            if (req.body.laboratorio != null) {
                laboratorio = await Laboratorio.findById(req.body.laboratorio);
            }

            await Lote.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/" + caminhoBase + "lst");
        };

        this.find = async (req, res) => {
            const filtro = req.body.filtro;
            const laboratorio = await Laboratorio.find({});
            const resultado = await Lote.find({
                codigo: { $regex: filtro, $options: "i" },
            });
            res.render(caminhoBase + "lst", {
                Lotes: resultado,
                Laboratorios: laboratorio,
            });
        };
    }
}
