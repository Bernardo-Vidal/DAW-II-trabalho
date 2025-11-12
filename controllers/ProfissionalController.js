//importar o Model
import Profissional from "../models/Profissional.js";

export default class ProfissionalController {
    constructor(caminhoBase = "Profissional/") {
        this.caminhoBase = caminhoBase;

        this.openAdd = async (req, res) => {
            res.render(caminhoBase + "add");
        };
        this.Excluir = async (req, res) => {
            await Profissional.findByIdAndDelete(req.params.id);
            res.redirect("/" + this.caminhoBase + "lst");
        };
        this.add = async (req, res) => {
            await Profissional.create({
                nome: req.body.nome,
                cargo: req.body.cargo,
                crm: req.body.crm,
                foto: req.file.buffer,
            });
            res.redirect("/" + caminhoBase + "add");
        };
        this.list = async (req, res) => {
            const resultado = await Profissional.find({});

            const resposta = resultado.map((Profissional) => ({
                id: Profissional._id,
                nome: Profissional.nome,
                cargo: Profissional.cargo,
                crm: Profissional.crm,
                foto:
                    Profissional.foto && Buffer.isBuffer(Profissional.foto)
                        ? `data:image/png;base64,${Profissional.foto.toString(
                              "base64"
                          )}`
                        : null,
            }));

            res.render(caminhoBase + "lst", { Profissional: resposta });
        };
        this.openEdt = async (req, res) => {
            //passar quem eu quero editar
            const id = req.params.id;
            const Profissional = await Profissional.findById(id);
            console.log(Profissional);
            res.render(caminhoBase + "edt", { Profissional: Profissional });
        };
        this.Edt = async (req, res) => {
            await Profissional.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/" + caminhoBase + "lst");
        };

        this.find = async (req, res) => {
            const filtro = req.body.Profissional;
            const resultado = await Profissional.find({
                nome: { $regex: filtro, $options: "i" },
            });
            res.render(caminhoBase + "lst", { Profissionales: resultado });
        };
    }
}
