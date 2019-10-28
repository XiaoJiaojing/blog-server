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

            return res.json({
                data: data,
                more: data.length<limit?false:true

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

// 后台获取全部数据接口
router.get('/api/allArticles',function (req,res) {
    Articlelist.find({}, function (err, data) {
        if (err) {
            return backWebError(err, res)
        } else {
            return res.json({
                data: data
            })
        }
    })
})
// 后台上传数据接口
router.post('/api/article/upload',function (req,res) {
    console.log(req.body)
    var tagName = req.body.tag
    var tagId

   tag_list.some(item=>{
        if(item.name === tagName){
            tagId = item.id
        }else {
            tagId = 'tag'+ (tag_list.length+1)
        }
    })

    var article = {
        title: req.body.title,
        abstract: req.body.abstract,
        tagId:tagId,
        content: req.body.content
    }

    new Articlelist(article).save(function (err) {
        if(err){
            return backWebError(err,res)
        } else {
            console.log('上传成功')
            res.redirect('/')
        }
    })
})

//后台编辑数据接口
router.post('/api/article/edit',function (req,res) {
    // console.log(req.body)
    Articlelist.findByIdAndUpdate(req.body._id,req.body,function (err) {
        if(err){
            return backWebError(err,res)
        } else {
            console.log('编辑成功')
            res.redirect('/')
        }
    })

})

// 后台删除数据接口
router.get('/api/article/delete',function (req,res) {
    console.log(req.query._id)
    // Articlelist.remove({_id:req.query.id},function (err) {
    //     if(err){
    //         return backWebError(err,res)
    //     } else {
    //         console.log('删除成功')
    //         res.redirect('/')
    //     }
    // })
    Articlelist.findByIdAndRemove(req.query._id,function (err) {
        if(err){
            return backWebError(err,res)
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

module.exports = router