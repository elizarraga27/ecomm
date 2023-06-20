import chalk from 'chalk';

function manejaErro(erro){
    if(erro.cause.code === 'ECONNREFUSED'){
        throw new Error(chalk.red('O json-server está offline, tem que iniciar o json-server, npx json-server --watch src/cli/db.json'));
    }
}
   
class CategoryService{
    constructor(){
    }
    static async findCategories(){

      try{
        const status = await fetch(`http://localhost:3000/categories`)
        const res = await status.json()
        console.log(`response status: ${status.status}`, res)
        }catch(erro){
            manejaErro(erro);
        }
    }

    static async findCategoryById(id){
        try{
            const status = await fetch(`http://localhost:3000/categories/${id}`)
            const res = await status.json()
                
                    if(status.status === 404){     
                        console.log(`response status: ${status.status}`, chalk.red("id não encontrada, id não existe"))
                    }else{
                        console.log(`response status: ${status.status}`, res)
                    }
            }catch(erro){
                manejaErro(erro);
            }

    }

  }

  
   


export default CategoryService;