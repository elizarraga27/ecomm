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
}

export default CategoriaController;