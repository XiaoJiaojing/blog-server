const express = require('express')

const path = require('path')

const fs = require('fs')

var bodyParser = require('body-parser')

const router = require('./router')

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

app.use(router)

app.listen(3000, function () {
    console.log('服务器开启了...')
})