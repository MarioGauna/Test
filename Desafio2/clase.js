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
    constructor(archivo){
        this.fileName= archivo;
    }
    async leer(){
        const data =await fs.promises.readFile(this.fileName);
        const dataJson=JSON.parse(data);
        console.log(dataJson);
    }
    async save(){

    }
    async getById(numId){
        try{
            const data=await fs.promises.readFile(this.fileName);
            const dataJson=JSON.parse(data);
            let res=dataJson.find(x => x.id === numId);
            const final=JSON.stringify(res);
            console.log(res)
        }catch(error){
            console.log('Error',error);
        }
    }
    async deleteAll(){
        fs.writeFileSync('./Desafio2/productos.txt','', function(){console.log('Contenido Borrado')})
    }
}

const datos= new contenedor('./Desafio2/productos.txt');

//datos.leer();
datos.getById(1);
//datos.deleteAll();