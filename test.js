class usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }

    getFullName(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`);   //BIEN
    }

    addMascota(){
        this.mascotas.push(newPet)
    }

    countMascotas(){
        console.log(`Tengo ${this.mascotas.length} mascotas`);   //BIEN
    }

    addBook(){
        this.libros.push(newBook)
    }

    getBooksNames(){
        let texts= this.libros.map((item)=>item.nombre);
        console.log(texts);
    }
}

let books=[{nombre:'El señor de las moscas', author:'William Golding'},{nombre:'Fundación', author:'Isaac Asimov'}]

let puppy=["Lola","Pepo","Lara"]

const user= new usuario(`Elon`,`Musk`, books, puppy)

let newPet= "Fluffy";

let newBook={nombre:'El arte de la guerra', author:'Sun Tzu'};

user.getFullName();

user.addMascota(newPet);

user.countMascotas();

user.addBook(newBook);

user.getBooksNames();

console.log(user)