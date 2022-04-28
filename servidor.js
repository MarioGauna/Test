//import express  from 'express';
//import contenedor from './clase.js';

const express=require('express')
const contenedor=require('./clase.js')
const app=express();

// app.set('port', process.env.PORT || 8080);


let PORT= process.env.PORT || 8080;

app.listen(PORT);

console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)


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
