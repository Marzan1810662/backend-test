require('dotenv').config()
console.log(process.env)
const express = require('express')
const app = express()
const users_routes = require('./routes/user-routes')

port = process.env. PORT||5000

app.use(express.json()) 

app.get('/',(req,res)=>{
    res.json("Hello")
})

app.use('/api/users',users_routes)

app.all('*',(req,res)=>{
    res.status(404).send('Error')
})

app.listen(port,()=>{
    console.log(`server running at port: ${port}`);
})
