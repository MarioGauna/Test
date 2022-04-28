import express  from 'express';

import contenedor from './clase.js';

const app=express();

// app.set('port', process.env.PORT || 8080);


const port=process.env.port || 8080;

app.listen(port);

console.log(`Servidor HTTP escuchando en el puerto ${port}`)


const main =()=>{
    const datos= new contenedor('./productos.txt');
    datos.getAll();
    datos.getRandom();
}
main();


app.get('/productos',(req,res)=>{
    res.send('Lista Completa')
})

app.get('/productoRandom',(req,res)=>{
    res.send('Producto Random')
})
