const express = require('express')
const app = express ()
app.set("view engine", "ejs")
app.use(express.static('public'))

app.get("/", (riquisicao, resposta ) => {
    resposta.render('index')
})

app.get("/jub", (riquisicao, resposta ) => {
    resposta.render('jub')
})

app.get("/cas", (riquisicao, resposta ) => {
    resposta.render('cas')
})

app.get("/sob", (riquisicao, resposta ) => {
    resposta.render('sob')
})

app.get("/mac", (riquisicao, resposta ) => {
    resposta.render('mac')
})

app.listen(8080)