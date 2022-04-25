const fs = require('fs');


/* class contenedor {
    static count=0;
    constructor(title,price){
        this.id= ++this.constructor.count;
        this.title=title;
        this.price=price;
    }
    save(){
        push()
    }
    getById(){
        //leer archivo
        //parcearlo
        myArray.find(x => x.id === numero);
        //stringify
        //reescribirlo
    }
    getAll(){
        let data = fs.readFileSync('productos.txt','utf-8')
        let display= JSON.parse(data)
        console.log(display)
    }
    deleteById(){
        newArray.filter((item) => item.id !== numId);
    }
    deleteAll(){
        fs.writeFileSync('./Desafio2/productos.txt','', function(){console.log('Contenido Borrado')})

        // Este funciona a excepcion del console.log
    }
} */

//export default contenedor;


class contenedor{
    static countId=1;
    constructor(archivo){
        this.fileName= archivo;
    }
    async leer(){
        const data =await fs.promises.readFile(this.fileName);
        const dataJson=JSON.parse(data);
        console.log(dataJson);
    }
    async save(newDato){
        const data =await fs.promises.readFile(this.fileName);
        const dataJson=JSON.parse(data);
        if(dataJson.length === 0){
            let newId=countId;
            newDato.id=newId;
            dataJson.push(newDato);
            console.log('Articulo agregado con ID:' , ${newId});
        }else{
            last_element = dataJson[dataJson.length - 1];
            let newId= last_element.id + countId;
            newDato.id=newId;
            dataJson.push(newDato);
            console.log('Articulo agregado con ID:' ${newId});
        }
    }
    async getById(numId){
        try{
            const data=await fs.promises.readFile(this.fileName);
            const dataJson=JSON.parse(data);
            let res=dataJson.find(x => x.id === numId);
            res === undefined || res === null ? console.log('Error ID no encontrado'): console.log(res);
        }catch(error){
            console.log('Error',error);
        }
    }
    async deleteAll(){
        //Metodo 1
        fs.writeFileSync('./Desafio2/productos.txt','', function(){console.log('Contenido Borrado')})
        // Metodo 2
        array.length=0;
        console.log('Contenido Borrado')

        //agregue 2 metodos porque dice borrar objetos pero no dice nada del 
        //array. El primero borra todo y el segundo borra solo los objetos.
    }
}

const datos= new contenedor('./Desafio2/productos.txt');


datos.save({title:'lapicera',price:24.99});

//datos.leer();
//datos.getById(1);   // Si pongo un id fuera de la lista me tira undefined
//datos.deleteAll();