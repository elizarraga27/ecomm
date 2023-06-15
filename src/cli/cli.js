import chalk from 'chalk';
import CategoryService from './CategoryService.js';
const comando = process.argv;



async function processarComando(argumento){
    const comando = argumento[2];

    switch (comando) {
        case "--listarCategorias":{
            CategoryService.findCategories();
         break;
        }
        //case value2:
        //  statements

       
        default:
            console.log("argumento não valido, (pode usar", chalk.green("--listarCategorias"),")")
      }
  
}

  
processarComando(comando);