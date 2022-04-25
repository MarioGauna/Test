const fs = require('fs');

import contenedor from './test1.js';

try {
    new contenedor('./Desafio2/productos.txt')
} catch (error) {
    console.log(error)
}