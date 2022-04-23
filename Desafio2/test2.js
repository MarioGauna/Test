const fs = require('fs');

let prueba=require('./test1.js');

try {
    const data =await fs.promises.readFile(this.fileName);
    const dataJson=JSON.parse(data);
    prueba.leer(dataJson)
} catch (error) {
    console.log(error)
}