const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set("view engine","ejs")

app.get('/', (request, response) => {
    response.render('/soma')
})

app.get('/soma', (req, res) => {
    console.log("n1=" + req.query.n1)
    console.log("n2=" + req.query.n2)
    result = parseFloat(req.query.n1) + parseFloat(req.query.n2)
    if (isNaN(result)) {
        result = "Valores inválidos."
    } else {
        result = `${req.query.n1} + ${req.query.n2} = ${result}`
    }

    res.send("form",{ conta: result })
})
res.send({ conta: result })
app.listen(8080)
