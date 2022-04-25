//import contenedor from './clase.js';

const fs= require('fs')

// **************** getAll *******************++

let data1 = fs.readFileSync('./Desafio2/productos.txt','utf-8')
let manipulable= JSON.parse(data1)

console.log(manipulable)

let numId=1;

//***************** deleteById ********************

let resultado=manipulable.filter((item) => item.id !== numId);

console.log(resultado)

//let final=JSON.stringify(resultado)

//console.log(final)

//fs.writeFileSync('./Desafio2/productos.txt',final);

//let data2 = fs.readFileSync('./Desafio2/productos.txt','utf-8')
//let display= JSON.parse(data2)

//console.log(display)


// ************ getById *****************

//let resultado = manipulable.find(x => x.id === numId);

//console.log(resultado)


// ****************** save *******************



//let nuevoDato= new contenedor('lapicera', 22.4)

//let nuevoDato1=JSON.stringify(nuevoDato)

//display1.push(nuevoDato)

//console.log(display1)

//let nuevoDato2= new contenedor('crayones', 224)

//display1.push(nuevoDato2)

//console.log(display1)



// let nuevo2=new contenedor('fluffy',232);

// lola.push(nuevo2)

// let nuevo3=JSON.stringify(nuevo2)

// fs.appendFileSync('productos.txt', nuevo3)

// let data1 = fs.readFileSync('productos.txt','utf-8')
// let display1= JSON.parse(data1)





