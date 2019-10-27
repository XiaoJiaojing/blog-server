const express = require('express')

const fs = require('fs')

const router = express.Router()

const Document = require('./model/document')


router.get('/api/articles', function (req, res) {
    Document.find(req.query, function (err, data) {
        if (err) {
            return backWebError(err, res)
        } else {
            return res.json({
                more: true,
                data: data
            })
        }
    })
})

router.get('/api/article/detail', function (req, res) {
    Document.find(req.query, function (err, data) {
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

router.post('/api/article/upload', function (req, res) {
    Document.find({}, function (err, data) {
        if (err) {
            return backWebError(err, res)
        } else {
            req.body.page = Math.ceil(data.length / 4)  //每页长度是4，设置每个上传的对象处在第几页
            new Document(req.body).save(function (err) {
                if (err) {
                    console.log('保存失败')
                } else {
                    console.log('保存成功')
                }
            })
            res.redirect('/')
        }
    })

})

router.get('/api/tag/classify', function (req, res) {
    Document.find(req.query, function (err, data) {
        if (err) {
            return backWebError(err, res)
        } else {
            return res.json({
                data: data
            })
        }
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