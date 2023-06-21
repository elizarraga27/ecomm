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
}

export default CategoriaController;