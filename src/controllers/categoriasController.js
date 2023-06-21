import categorias from '../models/categoria.js';

class CategoriaController {
    
    static listarCategorias = async (req, res) => {
        try{
            const pesquisa = await categorias.find()
            res.status(200).json({categorias: pesquisa});
        }catch(erro){
            res.status(500).json({message: erro});
        }
    }

    static cadastrarCategoria = async (req, res) => {
        let categoria = new categorias(req.body);
        try{
            const categoriaNova = await categoria.save()
            res.status(201).json({categoriaNova: categoriaNova})
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar categoria`})
        }
    }

    static listarCategoriaById = async (req, res) => {
        const {id} = req.params
        try{
            const categoria = await categorias.findById(id)
            if(categoria){
                res.status(200).json(categoria)
            }else{
                res.status(404).send({message: "Categoria não encontrada"})
            }
        }catch(erro){
            res.status(500).send({message: erro.message});
        }
    }
}

export default CategoriaController;