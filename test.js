class usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }

    getFullName(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`);
    }

    addMascota(){
        puppy.push(this.mascotas)
    }

    countMascotas(){
        console.log(`Tengo ${this.mascotas.length} mascotas`);
    }

    addBook(){
        books.push(this.libros)
    }

    getBooksNames(){
        let texts= this.libros.map((item)=>item.nombre);
        console.log('Mis libros favoritos son ' + texts[0] +' y '+ texts[1]);
    }
}

let books=[{nombre:'El señor de las moscas', author:'William Golding'},{nombre:'Fundación', author:'Isaac Asimov'}]

let puppy=["Lola","Pepo","Lara"]

const user= new usuario(`Elon`,`Musk`, books, puppy)

user.getFullName();

user.addMascota();

user.countMascotas();

user.addBook();

user.getBooksNames();

console.log(user)