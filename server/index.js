require('dotenv').config()
const {CONNECTION_STRING} = process.env
const controller = require('./controller')
const massive = require('massive')
const express = require('express')
const app = express()
const PORT = 5050;


app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected ;)')
})

app.get("/api/houses", controller.getHouses)
app.post("/api/house", controller.addHouse)
app.delete("/api/houses/:id", controller.deleteHouse)


app.listen(PORT, () => {
console.log(`Listening on ${PORT}`)
})