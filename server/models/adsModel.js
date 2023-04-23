const mongoose = require('mongoose')

const adsSchema = mongoose.Schema({
    companyID: {
        type: mongoose.Schema.Types.ObjectId
    },
    primaryText: {
        type: String
    },
    headline: {
        type: String
    },
    description: {
        type: String
    },
    CTA: {
        type: String
    },
    imageUrl: {
        type: String
    }

})
module.exports = mongoose.model('ads', adsSchema)