const mongoose = require('mongoose')

const Schema = mongoose.Schema
var dbKey = require('../key.js')

mongoose.connect(dbKey, {useNewUrlParser: true});

var docSchema = new Schema({
    title: {type: String, required: true},
    abstract: {type: String},
    tag: {type: String, require: true},
    page: {type: Number, require: true},
    file: {type: String, require: true}
})

module.exports = mongoose.model('Document', docSchema)