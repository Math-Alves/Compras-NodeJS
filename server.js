//Importações
const express = require('express')
const app = express()

app.use(express.json())

//Lista de compras
const compras = ['arroz', 'feijão', 'carne']

//Retorna uma compra
app.get('/compras/:index', (req,res)=>{
    const {index} = req.params
    return res.json(compras[index])
})

//Retorna todas as compras
app.get('/compras', (req,res)=>{
    return res.json(compras)
})

//Add compra
app.post('/compras', (req,res)=>{
    const {name} = req.body
    compras.push(name)
    return res.json(compras)
})

//Mudar compra
app.put('/compras/:index', (req,res)=>{
    const {index} = req.params
    const {name} = req.body
    
    compras[index]= name
    return res.json(compras)
})

//Deletar compra
app.delete('/compras/:index',(req,res)=>{
    const {index} = req.params

    compras.splice(index, 1)
    return res.json({ message: "O Curso foi deletado!"})
})



app.listen('3000')