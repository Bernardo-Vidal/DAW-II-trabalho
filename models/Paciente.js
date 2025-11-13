import conexao from "../config/conexao.js";

const Paciente = conexao.Schema({
    nome: { type: String, required: true },
    foto: {
        type: Buffer,
        required: true,
        get: (valor) => {
            if (!valor) return null;
            return `data:image/png;base64,${valor.toString("base64")}`;
        },
    },
    dataNascimento: { type: Date, required: true },
    sus: { type: Number, required: true },
    cpf: { type: Number, required: true },
    horario: { type: Date, required: true },
    posto: { type: String, required: true },
    profissional: {
        type: conexao.Types.ObjectId,
        ref: "Profissional",
        required: true,
    },
    vacina: {
        type: conexao.Types.ObjectId,
        ref: "Vacina",
        required: true,
    },
});

export default conexao.model("Paciente", Paciente);
