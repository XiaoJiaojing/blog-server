const mongoose = require('mongoose')

const Schema = mongoose.Schema
var dbKey = require('../key.js')


mongoose.connect(dbKey, {useNewUrlParser: true});

var artSchema = new Schema({
    title: {type: String, required: true},
    abstract: {type: String},
    tagId: {type: String, require: true},
    content: {type: String, require: true}
})

module.exports = mongoose.model('Articlelist', artSchema)