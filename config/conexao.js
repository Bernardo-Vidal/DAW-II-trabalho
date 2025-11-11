import mongoose from "mongoose";
const url =
    "mongodb+srv://aluno:aluno@cluster001.i6zed.mongodb.net/?appName=cluster001";
const conexao = await mongoose.connect(url);

export default conexao;
