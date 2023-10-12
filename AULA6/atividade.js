const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("view engine","ejs")

app.get('/', (request, response) => {
    response.render('form')
})

app.get('/soma', (req, res) => {
    const data = {
        n1: req.query.n1,
        n2: req.query.n2,
        result: parseFloat(req.query.n1) + parseFloat(req.query.n2)
    }
    if (isNaN(data.result)) {
        data.result = "Valores inválidos."
    } else {
        data.result = `${req.query.n1} + ${req.query.n2} = ${data.result}`
    }

    res.render("lua",{ data })
})
app.listen(8080)
