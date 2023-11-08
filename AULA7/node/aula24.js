const express = require('express')
const app = express ()
app.set("view engine", "ejs")
app.use(express.static('public'))

app.get("/", (riquisicao, resposta ) => {
    resposta.render('index')
})

app.get("/obj", (riquisicao, resposta ) => {
    resposta.render('objetivos')
})

app.get("/tec", (riquisicao, resposta ) => {
    resposta.render('tec')
})

app.get("/ps", (riquisicao, resposta ) => {
    resposta.render('portugol')
})

app.listen(8080)