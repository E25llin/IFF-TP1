const express = require('express')
const app = express ()
const fs = require('fs')
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

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

app.get("/pont", (riquisicao, resposta ) => {
    resposta.render('pont')
})

app.get('/cad', (request, response) => {
    resultado = ""
    response.render('cad', { resultado })
})

app.post('/salvar', (req, res) => {
    let nomeNoForm = req.body.nome
    let telefoneNoForm = req.body.telefone
    let localNoForm = req.body.local
    let diaNoForm = req.body.dia
    
    let cadastro = {nome: nomeNoForm, telefone: telefoneNoForm, local: localNoForm, dia: diaNoForm}
    fs.appendFileSync('visitas.json', `\n${JSON.stringify(cadastro)}`)
    resultado = `Entraremos em contato para confirmar sua visita, ${nomeNoForm}.`
    res.render('cad', { resultado })
})

app.listen(8080)