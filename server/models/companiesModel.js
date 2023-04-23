const mongoose = require('mongoose')

const companiesSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'mandatory'],
    },
    url: {
        type: String,
        required: [true, 'mandatory'],
    },

})
module.exports = mongoose.model('Company', companiesSchema);