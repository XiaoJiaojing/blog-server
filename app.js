const express = require('express')
const path = require('path')
const fs = require('fs')

var bodyParser = require('body-parser')

const articleRoute = require('./route/article.js')
const tagRoute = require('./route/tag.js')

const app = express()

// parse application/x-www-form-urlencodeddist
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())


app.use(express.static(path.resolve(__dirname, 'dist')))


app.use(articleRoute)
app.use(tagRoute)

app.listen(80, function () {
    console.log('服务器开启了...')
})