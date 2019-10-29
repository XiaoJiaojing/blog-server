const express = require('express')
const path = require('path')
const fs = require('fs')

var bodyParser = require('body-parser')

const articleRoute = require('./route/article.js')
const tagRoute = require('./route/tag.js')

const app = express()

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true); // 可以带cookies
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
})

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