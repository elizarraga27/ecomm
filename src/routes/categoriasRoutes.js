import express from 'express';
import CategoriaController from '../controllers/categoriasController.js';

const router = express.Router();

router
    .get("/categorias", CategoriaController.listarCategorias)
    .post("/categorias", CategoriaController.cadastrarCategoria)


export default router;