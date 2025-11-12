import conexao from '../config/conexao.js'

const Fabricante = conexao.Schema({
    nome: {type:String, required:true},
    anoDeFundacao:{type:Number, required:true}
})

export default conexao.model('Fabricante',Fabricante)