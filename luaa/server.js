const express = require('express')
const app = express();
app.get('/', (req,res) =>{
    res.status(200).send("Olá mundo")
})
var ids = 0
let ar = []

app.use(express.json())

app.post('/so', (req,res)=>{
    try{
    const {username, userlastname} = req.body
    ar.push({
        id: ids,
        username: username,
        userlastname: userlastname
    }),
    ids = ids + 1


    res.status(200).send("BOA!!, USUARIO CASTRADO")
}
catch(error){
    res.status(500).send("ERRO "+error)
}
}) 

app.delete('/so/:id', (req,res)=>{
    try{
    const {id} = req.params

    ar.splice(id, 1)

    res.status(200).send("BOA!!, USUARIO removido")
}
catch(error){
    res.status(500).send("ERRO "+error)
}
}) 

app.put('/so/:id', (req,res)=>{
    try{
    const {id} = req.params
    const {username, userlastname} = req.body

    ar.splice(id, 1,{
        id: parseInt(id),
        username : username,
        userlastname : userlastname
      })

    res.status(200).send("BOA!!, USUARIO removido")
}
catch(error){
    res.status(500).send("ERRO "+error)
}
}) 

app.get('/so', (req,res) =>{
    res.status(200).send({users: ar})
})



PORT = 6666

app.listen(PORT,() =>{
    console.log("Servidor rodando na porta " + PORT)
})
