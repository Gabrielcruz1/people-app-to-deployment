const express = require('express')
const router = express.Router()

//IMPORT PEOPLE MODEL W OBJ DESTRUCTURING
const { People } = require('../models')

console.log(People)

// ROUTES

//INDEX ROUTE
router.get('/', async (req, res) =>{
    try{
        const allPeople = await People.find({})
        res.status(200).json(allPeople)
    }catch(error){
        res.status(400).json({error: err})
    }
    // res.status(200).json({message: "people index route working"})
})

//POST ROUTE
router.post('/', async (req, res) =>{
    console.log("testing post", req.body)
    try{
        const newPerson = await People.create(req.body)
        res.status(201).json(newPerson)
    }catch(err){
       res.status(400).json({error: err})
    }
    // res.status(201).json({message: "People post create route working"})
})

//SHOW ROUTE 
router.get('/:id', async (req, res) =>{
    try{
        const singlePerson = await People.findById(req.params.id)
        console.log(singlePerson)
        res.status(200).json(singlePerson)
    }catch(error){
        res.status(400).json({error: err})
    }
    // res.status(200).json({message: "Im the working show route ;}"})
})

//UPDAET ROUTE
router.put('/:id', async (req, res) =>{
    try{
        const updatedPerson = await People.findByIdAndUpdate(req.params.id, req.body)
        console.log(updatedPerson)
        res.status(200).json(updatedPerson)
    }catch(error){
        res.status(400).json({error: "error"})
    }
    // res.status(200).json({message: "Im the working put route >:)"})
})



//DELETE ROUTE 
router.delete('/:id', async (req, res) =>{
    try{
        const deletedPerson = await People.findByIdAndDelete(req.params.id)
        console.log(deletedPerson)
    }catch(error){
        res.status(400).json({error: "error"})
    }
    // res.json({message: "Ive been deleted :("})
})




module.exports = router 