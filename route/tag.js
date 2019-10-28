const express = require('express')

const router = express.Router()

const Articlelist = require('../model/articallist')

var tag_list = require('../data/tags.js')

router.get('/api/tags/all', function (req, res) {

    return res.json({
        data: tag_list
    })


})

function backWebError(err, res) {
    console.log(res + "..." + err)
    return res.json({
        err_code: '500',
        err_msg: "服务器除了点小差"
    })
}

module.exports = router