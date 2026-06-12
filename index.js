// importa a framework Express
const express = require('express')

// Cria uma instancia no express
const app = express()




// defina a porta
const port  = 3000;

// configura o EJS como motor template
app.set('view engine', 'ejs')

// configura a pasta publica para o usuario
app.use(express.static('public'))

// formulario vai ler via POST
app.use(express.urlencoded({extended: true}))


//rota
app.get('/saudacao',   (req, reks)=>{
    res.send("<h1> ola mundo!!! </h1> ")
}) //fim da saudacao

app.get('/',(req, res)=>{

    const nome = "jogadores"
    res.render("inicial",{nome})

}) //fim da rota/

app.listen(port, ()  => {
console.log(`servidor rodando) em: http://localhost:${port}`)

})

app.get ('/cadastrar',(req,res)=>{
    res.render("formulario")

})

app.post('/cadastrar', (req, res)=>{
 const nome = req.body.nome
 const jogador = {
   nome: req.body.nome,
   foto: req.body.foto,
   nivel: req.body.nivel,
    descricao: req.body.descricao
 }

 //adicionando  um jogador ao vetor
 jogadores.push(jogador)
 
 res.redirect("/cadastrar")

}) //Fim do POST / cadastrar 
 


