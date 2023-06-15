import chalk from 'chalk';
import CategoryService from './CategoryService.js';
const comando = process.argv;



async function processarComando(argumento){
    const comando = argumento[2];
    const id = argumento[3];
   
    switch (comando) {
        case "--listarCategorias":{
            if(id){
                console.log(chalk.yellow("esta opção não precisa de 3er argumento para id"))
            }else{
            CategoryService.findCategories();
            }
         break;
        }
        case "--recuperarCategoriaPorId":
            if(id){
            CategoryService.findCategoryById(id)
            }else{
                console.log(chalk.yellow("esta opção precisa de um 3er argumento para procurar pela id insira o numero de id"))
            }
         break;
       
        default:
            console.log("argumento não valido, (pode usar", chalk.green("--listarCategorias, --recuperarCategoriaPorId"),")")
      }
  
}

  
processarComando(comando);