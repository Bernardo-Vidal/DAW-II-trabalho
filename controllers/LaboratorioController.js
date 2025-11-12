//importar o Model
import Fabricante from '../models/Fabricante.js'

export default class FabricanteController
{

    constructor(caminhoBase = 'Fabricante/')
    {
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>
        {
            res.render(caminhoBase + "add")
        }
            this.Excluir = async(req, res)=>{
                await Fabricante.findByIdAndDelete(req.params.id)
                res.redirect('/' + this.caminhoBase + 'lst')
            }
        this.add = async(req, res)=>
        {
            await Fabricante.create
            (
                {
                    nome: req.body.nome,
                    anoDeFundacao: req.body.anoDeFundacao
                }

            )
            res.redirect('/' + caminhoBase + 'add')
        }
        this.list = async(req, res)=>
        {
            const resultado = await Fabricante.find({})
            res.render(caminhoBase + 'lst', {Fabricantes:resultado})
        }
        this.openEdt = async(req, res)=>
        {
            //passar quem eu quero editar
            const id = req.params.id
            const fabricante = await Fabricante.findById(id)
            console.log(fabricante)
            res.render(caminhoBase + 'edt', {Fabricante:fabricante})  
        }
        this.Edt = async(req, res)=>{
            await Fabricante.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/' + caminhoBase + 'lst')
        }

        this.find = async(req, res) =>{

            const filtro = req.body.fabricante
            const resultado = await Fabricante.find({nome: { $regex: filtro, $options: "i" }})
            res.render(caminhoBase + 'lst', {Fabricantes:resultado})
        }
    }
}