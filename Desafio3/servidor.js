const http=require('http')
//const app=express();

const mensaje=()=>{
    const hora=new Date().getHours();
    if(hora >=6 && hora <=12){
        return "Buenos Dias!"
    }else if(hora >=13 && hora <=19){
        return "Buenas Tardes!"
    }else{
        return "Buenas noches!"
    }
}

const app=http.createServer((req,res)=>{
    res.end(mensaje())
})

const port=8080;
app.listen(port);
console.log(`Servidor HTTP escuchando en el puerto ${port}`)

