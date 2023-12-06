const express = require("express");
const router = express.Router();
const db = require('../db');
const Notes = require("../models/notes");
const bodyParser = require('body-parser');

// Define your existing routes here

router.get('/notes', async (req, res) => {
    try {const notes= await Notes.findAll();
        

      res.send(notes);

    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.post("/addNote",async (req, res)  =>{
    try{
        console.log("h1",req.body)

        const addNote = await Notes.create({
            text:req.body.text,
            title:req.body.title

        })

        res.status(200).json("succuss");



    }
    catch(error){
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });

    }
})
router.delete("/deleteNote/:Id",async (req, res)  =>{
    try{
        console.log("h1")
        const id1 =  req.params.Id.replace(':', ''); 
        console.log("h1",req.params.Id)

        const addNote = await Notes.destroy({
            where:{
                id:id1
            }

        })

        res.status(200).json("succuss");



    }
    catch(error){
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });

    }
})



module.exports = router;
