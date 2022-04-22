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

    addMascota(newPet){
        this.mascotas.push(newPet)
    }

    countMascotas(){
        console.log(`Tengo ${this.mascotas.length} mascotas`);   //BIEN
    }

    addBook(newBook){
        this.libros.push(newBook)
    }

    getBooksNames(){
        let texts= this.libros.map((item)=>item.nombre);
        console.log(texts);
    }
}

let books=[{nombre:'El señor de las moscas', author:'William Golding'},
            {nombre:'Fundación', author:'Isaac Asimov'},
            {nombre:'Cien años de soledad', author:'Gabriel García Márquez'},
            {nombre:'Martin Fierro', author:'Jose Hernández'},
            {nombre:'Rayuela', author:'Julio Cortázar'}
        ]

let puppy=["Lola","Pepo","Lara"]

const user= new usuario(`Elon`,`Musk`, books, puppy)


// Llamada de métodos

user.getFullName();

user.addMascota("Fluffy");

user.countMascotas();

user.addBook({nombre:'El arte de la guerra', author:'Sun Tzu'});

user.getBooksNames();

console.log(user)