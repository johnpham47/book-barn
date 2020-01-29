const express = require('express')
const app = express()
const cors = require('cors')
const Sequelize = require('sequelize')
const models = require('./models')
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(cors())


app.get('/foo', (req,res) => {
    res.send('Hello')
})
app.post('/submitBook', (req, res) => {
    console.log("submitBook")
    console.log(req.body)
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imgURL = req.body.imgURL

    models.Books.create({
        title: title, 
        genre: genre,
        publisher: publisher,
        year: year,
        imgURL: imgURL
    })
})

app.listen(8080, () => {
    console.log("Server is running")
})