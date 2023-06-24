import mongoose from 'mongoose';

const validateNome = (nome) => {
    const re = /^(?!\d)\w{3,}$/;
    return re.test(nome);
};

const categoriaSchema = new mongoose.Schema(
    {
        id:{
            type: String
        },
        nome:{
            type: String,
            required: [true, 'precisa inserir o nome'],
            validate: [validateNome, "nome precisar ter mas de 3 letras, não pode começar com numero"]
        },
        status:{
            type: String,
            enum: ['ATIVA', 'INATIVA']
        }
    }
);

const categorias = mongoose.model('categories', categoriaSchema);

export default categorias;