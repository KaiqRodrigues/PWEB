function Parte1(){
    for(var i=1; i<=10;i++){
        console.log("Primeira Parte: "+ i)
    }
}

setTimeout(Parte1, 2000)

const fs = require('fs').promises;
fs.readFile('file.txt','utf8')
    .then(data =>{
        const registros = data.split("\n")
        registros.forEach((registro, index) => {
            console.log("Segunda parte: " + registro)
        });
    })
    .catch(err=>{
    console.error("erro ao ler arquivo ", err)
});

