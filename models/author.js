var mongoose = require('mongoose');
const { DateTime } = require("luxon");
var Schema = mongoose.Schema;

var AuthorSchema = new Schema (
    {
        first_name: {type: String, required: true, max: 100},
        family_name: {type: String, required: true, max: 100},
        data_of_birth: {type: Date},
        data_of_death: {type: Date},
    }
)

AuthorSchema
.virtual('name')
.get (function(){
    return this.family_name + ', ' + this.first_name;
})

AuthorSchema
.virtual('url')
.get (function(){
    return '/catalog/author/' + this._id;
})

module.exports = mongoose.model('Author', AuthorSchema);