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

const all = async()=>{
    const datos= new contenedor('./productos.txt');
    let res1= await datos.getAll();
    app.get('/productos',(req,res)=>{
        res.send(res1)
    })
}
all();

const random = async()=>{
    const datos= new contenedor('./productos.txt');
    let res2= await datos.getAll();
    let rDom = res2[Math.floor(Math.random()*res2.length)];
    app.get('/productoRandom',(req,res)=>{
        res.send(rDom)
    })
}
random();