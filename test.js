const mascota=[];

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
        mascota.push(new usuario(this.mascotas));
    }

    countMascotas(){
        console.log(mascota.length);
    }

    addBook(){

    }

    getBooksNames(){

    }
}

//const pepe= new usuario(`elon`,`musk`,`toto`,`manuela`)

usuario.countMascota;

