export default class contenedor{
    constructor(archivo){
        this.fileName= archivo;
    }
    async leer(){
        const data =await fs.promises.readFile(this.fileName);
        const dataJson=JSON.parse(data);
        console.log(dataJson);
    }
}
