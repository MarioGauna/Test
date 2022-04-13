const mascota=[];

class usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=[libros];
        this.mascotas=[mascotas];
    }

    getFullName(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`);
    }

    addMascota(){
        
    }

    countMascotas(){
        console.log(`Tengo ${this.mascotas[0].length} mascotas`);
    }

    addBook(){

    }

    getBooksNames(){
        let books= this.libros[0].map((item)=>item.nombre);
        console.log('Mis libros favoritos son ' + books[0] +' y '+ books[1]);
    }
}

//let books=[{nombre:'El señor de las moscas', author:'William Golding'},{nombre:'Fundación', author:'Isaac Asimov'}]

//let puppy=["Lola","Pepo","lara","Fluffy"]

const user= new usuario(`Elon`,`Musk`,[{nombre:'El señor de las moscas', author:'William Golding'},{nombre:'Fundación', author:'Isaac Asimov'}], ["Lola","Pepo","lara","Fluffy"])

user.getFullName();

//user.addMascota();

user.countMascotas();

//user.addBook();

user.getBooksNames();

console.log(user)