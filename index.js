const express = require("express")
const app = express()

app.set("view engine","ejs")
app.use(express.static("public"))

app.get("/",(req,res)=>{
    var nome = "claudio"
    res.render("aula",{
         nome: nome
    })
})

// app.get("/blog",(req,res)=>{
//     res.send("<br><hr><h1>Bem vindo ao Blog SENAC!<hr></h1>")
// })
// app.get("/perfil",(req,res)=>{
//     res.send("<br><hr><h1>Bem vindo ao Site Meu Perfil!<hr></h1>")
// })


app.listen(8081,()=>{
    console.log("O Servidor Está em Operação!")
})