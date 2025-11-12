import conexao from '../config/conexao.js'

const Celular = conexao.Schema({
    nome: {type:String, required:true},
    modelo:{type:String, required:true},
    sistema:{type:String, required:true},
    armazenamento:{type:Number, required:true},
    preco:{type:Number, required:true},
    fabricante:{type:String, required:true},
    foto:{type:Buffer, required:true}
})

export default conexao.model('Celular',Celular)