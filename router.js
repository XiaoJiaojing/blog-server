const express = require('express')

const fs = require('fs')

const router = express.Router()

const Articlelist = require('./model/articallist')


router.get('/api/articles', function (req, res) {
    var tagId = req.query.tagId
    var limit = req.query.pageSize||10; //分页参数
    var currentPage = req.query.page||1; //当前页码

    Articlelist.find(tagId?{tagId:tagId}:{}).limit(parseInt(limit)).skip(parseInt(limit)*(parseInt(currentPage)-1)).exec(function (err,data) {
        if (err) {
            return backWebError(err, res)
        } else {
            var totalLength = Articlelist.find()
            return res.json({
                data: data,
                more: data.length<4?false:true

            })
        }
    })

})

router.get('/api/article/detail', function (req, res) {
    Articlelist.find(req.query, function (err, data) {
        if (err) {
            return backWebError(err, res)
        } else {
            return res.json({
                data: data
            })
        }
    })
})

var tag_list = require('./data/tags.js')

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