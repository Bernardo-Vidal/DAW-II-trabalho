//importar o Model
import Vacina from "../models/Vacina.js";
import Lote from "../models/Lote.js";

export default class VacinaController {
    constructor(caminhoBase = "Vacina/") {
        this.caminhoBase = caminhoBase;

        this.openAdd = async (req, res) => {
            res.render(caminhoBase + "add");
        };
        this.Excluir = async (req, res) => {
            await Vacina.findByIdAndDelete(req.params.id);
            res.redirect("/" + this.caminhoBase + "lst");
        };
        this.add = async (req, res) => {
            var lote = null;

            if (req.body.lote != null) {
                lote = await Lote.findById(req.body.Lote);
            }
            await Vacina.create({
                nome: req.body.nome,
                efetividade: req.body.efetividade,
                lote: lote,
            });
            res.redirect("/" + caminhoBase + "add");
        };
        this.list = async (req, res) => {
            const lote = await Lote.find({});
            const resultado = await Vacina.find({}).populate("lote");

            res.render(caminhoBase + "lst", { Vacinas: resultado, Lote: lote });
        };
        this.openEdt = async (req, res) => {
            //passar quem eu quero editar
            const id = req.params.id;
            const lote = await Lote.find({});
            const Vacina = await Vacina.findById(id);
            console.log(Vacina);
            res.render(caminhoBase + "edt", { Vacina: Vacina, Lote: lote });
        };
        this.Edt = async (req, res) => {
            var lote = null;

            if (req.body.lote != null) {
                lote = await Lote.findById(req.body.Lote);
            }
            await Vacina.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/" + caminhoBase + "lst");
        };

        this.find = async (req, res) => {
            const filtro = req.body.Vacina;
            const lote = await Lote.find({});
            const resultado = await Vacina.find({
                nome: { $regex: filtro, $options: "i" },
            });
            res.render(caminhoBase + "lst", {
                Vacinaes: resultado,
                Lote: lote,
            });
        };
    }
}
