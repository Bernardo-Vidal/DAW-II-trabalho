import conexao from "../config/conexao.js";

const Laboratorio = conexao.Schema({
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    email: { type: String, required: true },
    logo: {
        type: Buffer,
        required: false,
        get: (valor) => {
            if (!valor) return null;
            return `data:image/png;base64,${valor.toString("base64")}`;
        },
    },
});

export default conexao.model("Laboratorio", Laboratorio);
