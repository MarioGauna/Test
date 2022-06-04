// import express  from 'express';
// import contenedor from './clase.js';

const express=require('express');
const contenedor = require('./clase.js');
const database = new contenedor('./productos.txt');


const app=express();

// app.set('port', process.env.PORT || 8080);


let PORT= process.env.PORT || 8080;

app.listen(PORT);

console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)

app.get('/',(req,res)=>{
    res.send('<h1>Desafío 3</h1>')
})

app.get('/productos',async(req,res)=>{
    let result= await database.getAll();
    res.json({result});
})

app.get('/productoRandom',async(req,res)=>{
    let result= await database.getAll();
    let rDom = result[Math.floor(Math.random()*result.length)];
    res.json({rDom});
})