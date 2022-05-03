import express  from 'express';
import contenedor from './clase.js';

//const express=require('express')
//const contenedor=require('./clase.js')
const app=express();

// app.set('port', process.env.PORT || 8080);


let PORT= process.env.PORT || 8080;

app.listen(PORT);

console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)

app.get('/',(req,res)=>{
    res.send('<h1>Desafío 3</h1>')
})

const main = async()=>{
    const datos= new contenedor('./productos.txt');
    let res1= await datos.getAll();
    let res2= await datos.getRandom();
    app.get('/productos',(req,res)=>{
        res.send(res1)
    })
    app.get('/productoRandom',(req,res)=>{
        res.send(res2)
    })
}
main();