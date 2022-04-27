import contenedor from './clase.js';

const main = async()=>{
    const datos= new contenedor('./Desafio2/productos.txt');

    await datos.getAll();
}

main();
