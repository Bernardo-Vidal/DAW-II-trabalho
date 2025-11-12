import conexao from "../config/conexao.js";

const Laboratorio = conexao.Schema({
    nome: { type: String, required: true },
    logo: { type: Buffer, required: true },
    endereco: { type: String, required: true },
    email: { type: String, required: true },
});

export default conexao.model("Laboratorio", Laboratorio);
