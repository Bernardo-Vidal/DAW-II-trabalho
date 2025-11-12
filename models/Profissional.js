import conexao from "../config/conexao.js";

const Profissional = conexao.Schema({
    nome: { type: String, required: true },
    foto: { type: Buffer, required: true },
    crm: { type: String, required: true },
    cargo: { type: String, required: true },
});

export default conexao.model("Profissional", Profissional);
