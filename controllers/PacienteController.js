//importar o Model
import Laboratorio from "../models/Laboratorio.js";
import Paciente from "../models/Paciente.js";
import Profissional from "../models/Profissional.js";
import Vacina from "../models/Vacina.js";

export default class PacienteController {
    constructor(caminhoBase = "Paciente/") {
        this.caminhoBase = caminhoBase;

        this.openAdd = async (req, res) => {
            res.render(caminhoBase + "add");
        };
        this.Excluir = async (req, res) => {
            await Paciente.findByIdAndDelete(req.params.id);
            res.redirect("/" + this.caminhoBase + "lst");
        };
        this.add = async (req, res) => {
            var vacina = null;
            var profissional = null;

            if (req.body.vacina != null) {
                vacina = await Vacina.findById(req.body.vacina);
            }

            if (req.body.profissional != null) {
                profissional = await Profissional.findById(
                    req.body.profissional
                );
            }
            await Paciente.create({
                nome: req.body.nome,
                foto: req.file.buffer,
                dataNascimento: req.body.dataNascimento,
                armazenamento: req.body.armazenamento,
                sus: req.body.sus,
                cpf: req.body.cpf,
                horario: req.body.horario,
                posto: req.body.posto,
                profissional: profissional,
                vacina: vacina,
            });
            res.redirect("/" + caminhoBase + "add");
        };
        this.list = async (req, res) => {
            const vacina = await Vacina.find({});
            const profissional = await Profissional.find({});
            const resultado = await Paciente.find({}).populate(
                "vacina",
                "profissional"
            );

            const resposta = resultado.map((Paciente) => ({
                /*
                id: Paciente._id,
                nome: Paciente.nome,
                modelo: Paciente.modelo,
                sistema: Paciente.sistema,
                armazenamento: Paciente.armazenamento,
                preco: Paciente.preco,
                fabricante: Paciente.fabricante,*/
                foto:
                    Paciente.foto && Buffer.isBuffer(Paciente.foto)
                        ? `data:image/png;base64,${Paciente.foto.toString(
                              "base64"
                          )}`
                        : null,
            }));

            res.render(caminhoBase + "lst", {
                Pacientes: resposta,
                Vacinas: vacina,
                Profissional: profissional,
            });
        };
        this.openEdt = async (req, res) => {
            //passar quem eu quero editar
            const id = req.params.id;
            const vacina = await Vacina.find({});
            const profissional = await Profissional.find({});
            const Paciente = await Paciente.findById(id);
            console.log(Paciente);
            res.render(caminhoBase + "edt", {
                Paciente: Paciente,
                Vacina: vacina,
                Profissional: profissional,
            });
        };
        this.Edt = async (req, res) => {
            var vacina = null;
            var profissional = null;

            if (req.body.vacina != null) {
                vacina = await Vacina.findById(req.body.vacina);
            }

            if (req.body.profissional != null) {
                profissional = await Profissional.findById(
                    req.body.profissional
                );
            }
            await Paciente.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/" + caminhoBase + "lst");
        };

        this.find = async (req, res) => {
            const filtro = req.body.Paciente;
            const vacina = await Vacina.find({});
            const laboratorio = await Laboratorio.find({});
            const resultado = await Paciente.find({
                nome: { $regex: filtro, $options: "i" },
            });
            res.render(caminhoBase + "lst", {
                Pacientes: resultado,
                Vacina: vacina,
                Laboratorio: laboratorio,
            });
        };
    }
}
