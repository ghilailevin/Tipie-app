const express = require('express')
const { Router } = require('express');
const fs = require("fs")
const router = Router();
const json_tipie = fs.readFileSync('data_tipie.json', 'utf-8');
let data = JSON.parse(json_tipie);

router.get('/data_tipie', async(req, res) =>{
    const response = await data
    return res.send(response)
})

router.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    if (email !== 'demo@tipieapp.com' && password !== 'Tipie2022') {
      return res.status(401).json({ message: 'Tus credenciales son invalidas' });
    }
    return res.status(200).json({ message: 'Bienvenido' });
});

module.exports = router