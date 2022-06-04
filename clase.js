//import fs from 'fs';
const fs=require('fs');

//export default 
class contenedor{
    constructor(fileName){
        this.fileName= fileName;
    }
    async save(newDato){
        try{
            const data =await fs.promises.readFile(this.fileName);
            const dataJson=JSON.parse(data);
            let countId=1;
            if(dataJson.length === 0){
                let newId=countId;
                newDato.id=newId;
                dataJson.push(newDato);
                const dataJsonFinal=JSON.stringify(dataJson)
                fs.promises.writeFile('./productos.txt',dataJsonFinal)
                console.log('Articulo agregado con ID:', newId, '\n');
            }else{
                let last_element = dataJson[dataJson.length - 1];
                let newId= last_element.id + countId;
                newDato.id=newId;
                dataJson.push(newDato);
                const dataJsonFinal=JSON.stringify(dataJson)
                fs.promises.writeFile('./productos.txt',dataJsonFinal)
                console.log('Articulo agregado con ID:', newId, '\n');
            } 
        }catch(error){
            console.log('Hubo un error al guardar el articulo',error);
        }
        
    }
    async getById(numId){ 
        try{
            const data=await fs.promises.readFile(this.fileName);
            const dataJson=JSON.parse(data);
            let res=dataJson.find(x => x.id === numId);
            res === undefined || res === null ? console.log('Error ID no encontrado', '\n'): console.log(res, '\n');
        }catch(error){
            console.log('Hubo un error al obtener el articulo seleccionado',error);
        }
    }
    async getAll(){
        try {
            const data =await fs.promises.readFile(this.fileName);
            const dataJson=JSON.parse(data);
            return dataJson;
        } catch (error) {
            console.log('Hubo un error al mostrar la base de datos',error);
        }
        
    }
    async deleteById(numId){
        try {
            const data =await fs.promises.readFile(this.fileName);
            const dataJson=JSON.parse(data);
            let res=dataJson.find(x => x.id === numId);
            if(res === undefined){
                console.log('Error ID no encontrado')
            }else{
                let newData=dataJson.filter((item) => item.id != numId);
                const dataJsonFinal=JSON.stringify(newData);
                fs.promises.writeFile('./productos.txt',dataJsonFinal)
                console.log('Articulo Borrado', '\n');
            }
        } catch (error) {
            console.log('Hubo un error al borrar el articulo',error);
        }
    }
    async deleteAll(){
        try {
            let data =await fs.promises.readFile(this.fileName);
            let dataJson=JSON.parse(data);
            dataJson.length=0;
            fs.promises.writeFile('./productos.txt',dataJson)
            dataJson='[]';
            fs.promises.appendFile('./productos.txt',dataJson)
            console.log('Base de datos borrada', '\n');
        } catch (error) {
            console.log('Hubo un error al borrar la base de datos',error);
        }
    }
}

module.exports=contenedor;