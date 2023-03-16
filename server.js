const express = require('express')
const http = require('https')
const app = express()
const Port = 8080

app.set("view engine", "ejs")

app.get('/', (req, res) => {

    res.render('index')

})

app.get('/:id', (req, res) => {

    http.get(req.query.url, (resp) => {

        let data = ''

        resp.on('data', (chunk) => {data += chunk})

        resp.on('end', () => {

            res.set('Content-Type', 'text/html').send(data)

        })

    }).on('error', (err) => {console.log(err)})

})

app.listen(8080, () => console.log(Port + " nice"))