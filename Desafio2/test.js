import contenedor from './clase.js';

const main = async()=>{
    const datos= new contenedor('./productos.txt');

    // await datos.save({title:"Crayon",price: 7.67});
    // await datos.save({title:"Goma",price: 0.50});
    // await datos.save({title:"lapicera",price: 10.20});

    // await datos.getById(1);
    // await datos.getById(20);


    await datos.getAll();

    await datos.getRandom();

    // await datos.deleteById(2);
    // await datos.deleteById(20);

    // await datos.deleteAll();
}

main();