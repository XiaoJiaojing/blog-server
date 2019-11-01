const express = require('express')

const router = express.Router()

const Articlelist = require('../model/articallist')
var tag_list = require('../data/tags.js')

router.get('/api/articles', function (req, res) {
    var tagId = req.query.tagId
    var limit = req.query.pageSize || 10; //分页参数
    var currentPage = req.query.page || 1; //当前页码

    Articlelist.find(tagId ? {tagId: tagId} : {}).limit(parseInt(limit)).skip(parseInt(limit) * (parseInt(currentPage) - 1)).exec(function (err, data) {
        if (err) {
            return backWebError(err, res)
        } else {
            Articlelist.find().estimatedDocumentCount(function (err, count) {
                if (data.length === 0) {
                    return res.json({
                        data: data,
                        more: false
                    })
                } else{
                    if(tagId){
                        return res.json({
                            data: parseTag(data),
                            more: currentPage < Math.ceil(data.length / limit) ? true : false
                        })
                    }else {
                        return res.json({
                            data: parseTag(data),
                            more: currentPage < Math.ceil(count / limit) ? true : false
                        })
                    }

                }

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
                data: parseTag(data)
            })
        }
    })
})


// 后台获取全部数据接口
router.get('/api/allArticles', function (req, res) {
    Articlelist.find({}, function (err, data) {
        if (err) {
            return backWebError(err, res)
        } else {
            return res.json({
                data: parseTag(data)
            })
        }
    })
})

// 后台上传数据接口
router.post('/api/article/upload', function (req, res) {
    var tempTagId = parseDataToTagId(req.body.tag)
    console.log(tempTagId)
    var article = {
        title: req.body.title,
        abstract: req.body.abstract,
        tagId: tempTagId,
        content: req.body.content
    }

    new Articlelist(article).save(function (err) {
        if (err) {
            return backWebError(err, res)
        } else {
            console.log('上传成功')
            res.redirect('/')
        }
    })
})

//后台编辑数据接口
router.post('/api/article/edit', function (req, res) {
    var article = {
        title: req.body.title,
        abstract: req.body.abstract,
        tagId: parseDataToTagId(req.body.tag),
        content: req.body.content
    }
    Articlelist.findByIdAndUpdate(req.body._id, article, function (err) {
        if (err) {
            return backWebError(err, res)
        } else {
            console.log('编辑成功')
            res.redirect('/')
        }
    })
})

// 后台删除数据接口
router.get('/api/article/delete', function (req, res) {
    Articlelist.findByIdAndRemove(req.query._id, function (err) {
        if (err) {
            return backWebError(err, res)
        } else {
            console.log('删除成功')
            res.redirect('/')
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


function parseTag(data) {
    for (var i = 0; i < data.length; i++) {
        var temp = data[i]
        tag_list.some(tagItem => {
            if (tagItem.id === temp.tagId) {
                temp.tagId = tagItem.name
            }
        })
    }
    return data
}

function parseDataToTagId(data) {
    for (var i = 0; i < tag_list.length; i++) {
        if (tag_list[i].name === data) {
            return tag_list[i].id
        }
    }
    return "tag8"
}

module.exports = router