//Importações
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/post')

//Configurações
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Rotas

    //Home
    app.get('/', (req, res)=>{
        Post.findAll().then((lista)=>{
            res.render('home',{lista: lista})
        })
        
    })


    //Add item de compra
    app.get('/cad', (req,res)=>{
        res.render('form')
    })

    app.post('/add', (req,res)=>{
        Post.create({
            name: req.body.item
        }).then(()=>{
            res.redirect('/')
        }).catch((err)=>{
            res.send('Errooou'+err)
        })
    })

    //Deletar item
    app.get('/deletar/:id',(req, res)=>{
        Post.destroy({where: {'id': req.params.id}}
        ).then(()=>{
            res.redirect('/')
        }).catch((err)=>{
            res.send('item não existe')
        })
    })

app.listen('3000')