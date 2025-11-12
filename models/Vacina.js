import conexao from "../config/conexao.js";

const Vacina = conexao.Schema({
    nome: { type: String, required: true },
    efetividade: { type: String, required: true },
    lote: {
        type: conexao.Types.ObjectId,
        ref: "Lote",
        required: true,
    },
});

export default conexao.model("Vacina", Vacina);
