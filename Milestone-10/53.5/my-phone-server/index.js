const express = require('express')
const phones = require('./phons.json')
const app = express()
const port = 5000


app.get('/', (req, res) =>{
    res.send('my phone info coming soon afasdfasfas')
});

app.get('/phones', (req, res) =>{
    res.send(phones);
})

app.get('/phones/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    // const id = req.params.id;
    const phone = phones.find(phone => phone.id === id || {})
    console.log('i need data for id: ', id)
    res.send(phone)
})


app.listen(port, () => {
    console.log(`My phone server is running on port: ${port}`)
})