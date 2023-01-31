const express = require('express')
const APP = express()

const PORT = 3000

APP.get('/', (req, res) => {
    res.send('Hello, Chasing Good API')
})

APP.listen(port, () => {
    console.log(`Server listening on Port ${PORT}`)
})