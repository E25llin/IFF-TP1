const express = require(`express`)
const app = express()

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/login', function(req, res) {
    res.render('teste')
})

app.post('/paginaHome', function(req, res) {
    console.log(req.body);
   res.render('home', {data: req.body})
})
app.listen(3000, ()=>{
    console.log('Meu servidor está rodando!');
})