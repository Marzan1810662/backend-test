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

module.exports = router