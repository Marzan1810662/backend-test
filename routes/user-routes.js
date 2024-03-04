const express = require('express')
const router = express.Router()
const {users} = require('../users')

router.get('/', (req, res) => {
    res.json(users)
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    user = users.find((user) => id == user.id)
    if (user){
        res.json(user) 
    }else{
        res.send(`Could not find user with id ${id}`)
    }
    
})

router.post('/',(req,res)=>{
    const user = req.body
    users.push(user)
    res.json(users)
})

router.put('/:id',(req,res)=>{
    const {id} = req.params
    const newInfo = req.body
    users.forEach((user)=>{
        if (id == user.id){
            user.name = newInfo.name
        }
    })
    console.log('put');
    res.json(users)
})
router.patch('/:id',(req,res)=>{
    const {id} = req.params
    console.log(id);
    const newInfo = req.body
    users.forEach((user)=>{
        if (id == user.id){
            user.age = newInfo.age
        }
    })
    console.log('patch');
    res.json(users)
})

router.delete('/:id',(req,res)=>{
    const id = req.params.id
    const newUsers = users.filter((user)=>{
        return id != user.id
    })
    res.json(newUsers)
})

module.exports = router