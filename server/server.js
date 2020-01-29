const express = require('express')
const app = express()
const cors = require('cors')
const Sequelize = require('sequelize')
const models = require('./models')
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded())
app.use(cors())

app.post('/submitBook', (req, res) => {
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imgURL = req.body.imgURL

    let book = models.Books.build({
        title: title, 
        genre: genre,
        publisher: publisher,
        year: year,
        imgURL: imgURL
    })
    book.save()
})

app.listen(8080, () => {
    console.log("Server is running")
})