import conexao from "../config/conexao.js";

const Lote = conexao.Schema({
    validade: { type: Date, required: true },
    codigo: { type: String, required: true },
    laboratorio: {
        type: conexao.Types.ObjectId,
        ref: "Laboratorio",
        required: true,
    },
});

export default conexao.model("Lote", Lote);
