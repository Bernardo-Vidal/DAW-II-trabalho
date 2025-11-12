//importar o Model
import Laboratorio from "../models/Laboratorio.js";

export default class LaboratorioController {
    constructor(caminhoBase = "Laboratorio/") {
        this.caminhoBase = caminhoBase;

        this.openAdd = async (req, res) => {
            res.render(caminhoBase + "add");
        };
        this.Excluir = async (req, res) => {
            await Laboratorio.findByIdAndDelete(req.params.id);
            res.redirect("/" + this.caminhoBase + "lst");
        };
        this.add = async (req, res) => {
            await Laboratorio.create({
                nome: req.body.nome,
                endereco: req.body.endereco,
                email: req.body.email,
                logo: req.file.buffer,
            });
            res.redirect("/" + caminhoBase + "add");
        };
        this.list = async (req, res) => {
            const resultado = await Laboratorio.find({});

            const resposta = resultado.map((laboratorio) => ({
                nome: laboratorio.nome,
                endereco: laboratorio.endereco,
                email: laboratorio.email,
                logo:
                    laboratorio.logo && Buffer.isBuffer(laboratorio.logo)
                        ? `data:image/png;base64,${laboratorio.logo.toString(
                              "base64"
                          )}`
                        : null,
            }));

            res.render(caminhoBase + "lst", { Laboratorios: resultado });
        };
        this.openEdt = async (req, res) => {
            //passar quem eu quero editar
            const id = req.params.id;
            const Laboratorio = await Laboratorio.findById(id);
            console.log(Laboratorio);
            res.render(caminhoBase + "edt", { Laboratorio: Laboratorio });
        };
        this.Edt = async (req, res) => {
            await Laboratorio.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/" + caminhoBase + "lst");
        };

        this.find = async (req, res) => {
            const filtro = req.body.Laboratorio;
            const resultado = await Laboratorio.find({
                nome: { $regex: filtro, $options: "i" },
            });
            res.render(caminhoBase + "lst", { Laboratorios: resultado });
        };
    }
}
