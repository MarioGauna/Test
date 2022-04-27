const fs = require('fs');

export default class contenedor{
    static countId=1;
    constructor(archivo){
        this.fileName= archivo;
    }
    async save(newDato){
        try{
            const data =await fs.promises.readFile(this.fileName);
            const dataJson=JSON.parse(data);
            if(dataJson.length === 0){
                let newId=countId;
                newDato.id=newId;
                dataJson.push(newDato);
                const dataJsonFinal=JSON.stringify(dataJson)
                fs.promises.writeFile('./Desafio2/productos.txt',dataJsonFinal)
                console.log('Articulo agregado con ID:');
            }else{
                last_element = dataJson[dataJson.length - 1];
                let newId= last_element.id + countId;
                newDato.id=newId;
                dataJson.push(newDato);
                const dataJsonFinal=JSON.stringify(dataJson)
                fs.promises.writeFile('./Desafio2/productos.txt',dataJsonFinal)
                console.log('Articulo agregado con ID:');
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
            res === undefined || res === null ? console.log('Error ID no encontrado'): console.log(res);
        }catch(error){
            console.log('Hubo un error al obtener el articulo seleccionado',error);
        }
    }
    async getAll(){
        try {
            const data =await fs.promises.readFile(this.fileName);
            const dataJson=JSON.parse(data);
            console.log(dataJson);
        } catch (error) {
            console.log('Hubo un error al mostrar la base de datos',error);
        }
        
    }
    async deleteById(numId){
        try {
            const data =await fs.promises.readFile(this.fileName);
            const dataJson=JSON.parse(data);
            let newData=dataJson.filter((item) => item.id !== numId);
            const dataJsonFinal=JSON.stringify(newData);
            fs.promises.writeFile('./Desafio2/productos.txt',dataJsonFinal)
        console.log('Articulo Borrado');
        } catch (error) {
            console.log('Hubo un error al borrar el articulo',error);
        }
        
    }
    async deleteAll(){
        try {
            await fs.promises.writeFile('./Desafio2/productos.txt','')
            console.log('Base de datos borrada');
        } catch (error) {
            console.log('Hubo un error al borrar la base de datos',error);
        }
        
    }
}