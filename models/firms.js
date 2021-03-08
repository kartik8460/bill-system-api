const mongoose = require('mongoose');

const { Schema } = mongoose;

const firmsSchema = new Schema(
    {
        name: {type: String },
        address: { type: String },
        pincode: { type: Number },
        gstNumber: {type: String},
        mobile: {type: String},
    },
    {
        timestamps: false,
        versionKey: false
    }
)

module.exports = mongoose.model('Firm', firmsSchema);