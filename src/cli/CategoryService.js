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
        const res = await fetch(`http://localhost:3000/categories`)
            .then(data => {
            return data.json();
             })
        console.log(res)
        }catch(erro){
            manejaErro(erro);
        }
    }

  }

  
   


export default CategoryService;