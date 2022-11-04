const express = require('express');
require("dotenv").config();

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req,res) => {
    res.send('hello from backend')
})

app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`)
})