// var express = require('express')
// let app=express();
// app.listen(3000, function(){
//     console.log("servidor em express");
// });


// app.get("/historia", function(req,res){
//     res.send("<html> <body>History ou Story?</body></html>");
// });
// app.get("/curso", function(req,res){
//     res.send("<html> <body>Curso da fatec</body></html>");
// });

// app.get("/", function(req,res){
//     res.send("<html> <body>home</body></html>");
// });
// app.get("/professores", function(req,res){
//     res.send("<html> <body>Professor exite em ingles tambem</body></html>");
// });

// app.listen(3000, function(){
//     console.log("Servidor com express foi carregado");
// })



var express = require('express')
let app=express();
let texto = require('/modulo1')
app.set("view engine", 'ejs')

app.get('/', function(req,res){
    res.render("home/index");
});
app.get("/admin/adicionar_user", function(req,res){
    res.render("admin/adicionar_user")
})

app.get("/informacao/historia", function(req,res){
    res.render("informacao/historia");
});

app.get("/informacao/cursos", function(req,res){
    res.render("informacao/cursos");
});

app.get("/informacao/professores", function(req,res){
    res.render("informacao/professores");
});

app.listen(3000, function(){
    console.log("texto");
})

