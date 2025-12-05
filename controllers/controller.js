import Vacina from '../models/Vacina.js'
import Lote from '../models/Lote.js'
import Profissional from '../models/Profissional.js'
import Laboratorio from '../models/Laboratorio.js'
import Paciente from '../models/Paciente.js'

export default class GeralController {
    constructor() {
        this.admin = async (req, res) => {
            res.render("index");
        };
        this.home = async (req, res) => {
            res.render("site/home");
        };
        this.about = async (req, res) => {
            res.render("site/about");
        };
        this.agenda = async (req, res) => {
            const pacientes = await Paciente.find({})
            res.render("site/agenda", {Paciente:pacientes});
        };
        this.stats = async (req, res) => {
            const profissionais =  await Profissional.find({})
            const laboratorios =  await Laboratorio.find({})
            const lotes =  await Lote.find({}).populate("laboratorio")
            const vacinas =  await Vacina.find({}).populate("lote")
            const pacientes =  await Paciente.find({}).populate("vacina").populate("profissional")
            
            res.render("site/stats", {Vacina:vacinas, Paciente:pacientes, Profissional:profissionais, Lote:lotes, Laboratorio:laboratorios});
        };
        this.formulario = async (req, res) => {
            res.render("index");
        };
    }
}
