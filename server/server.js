const express = require('express')
const app = express()
const cors = require('cors')
const Sequelize = require('sequelize')
const models = require('./models')
const PORT = process.env.PORT || 8080;
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

app.use(express.json())
app.use(cors())


app.get('/displayBooks', (req,res) => {
    models.Books.findAll().then((result) => {
        res.json({results: result})
    })
})

app.post('/register', (req, res) => {
    console.log('Registering user...')
    let username = req.body.username
    let password = req.body.password

    models.Users.findOne({
        where: {
            username: username
        }
    }).then((user) => {
        if (user) {
            res.status(500).json({message: 'Username already exists'})
        }
        else {
            bcrypt.hash(password, SALT_ROUNDS)
            .then(hash => {
                models.Users.create({
                    username: username,
                    password: hash
                })
            })
        }
    })
})

app.post('/login', (req, res) => {
    console.log('Authenticating login...')
    let username = req.body.username
    let password = req.body.password

    models.Users.findOne({
        where: {
            username: username
        }
    }).then((user) => {
        if (user) {
            bcrypt.compare(password, user.password)
            .then((passwordMatch) => {
                if (passwordMatch) {
                    res.json({isAuthenticated: true})
                }
                else {
                    res.json({isAuthenticated: false})
                }
            })
        }
        else {
            res.json({isAuthenticated: false})
        }
    })
})

app.post('/submitBook', (req, res) => {
    console.log("submitBook")
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

app.post('/updateBook', (req, res) => {
    console.log("Updating book")
    let id = req.body.id
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imgURL = req.body.imgURL

    models.Books.update({
        title: title,
        genre: genre,
        publisher: publisher,
        year: year,
        imgURL: imgURL
    }, {
        where: {
            id: id
        }
    }).then(res.send("Book Updated!"))
})

app.post('/deleteBook', (req, res) => {
    console.log("Deleting book")
    let id = req.body.id
    models.Books.destroy({
        where: {
            id: id
        }
    })
    
})

app.listen(8080, () => {
    console.log("Server is running")
})