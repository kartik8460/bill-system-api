const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsSchema = new Schema(
    {
        name: { type: String },
        description: { type: String },
        hsnCode: { type: Number },
        sgstPercent: { type: Number },
        cgstPercent: { type: Number },
        igstPercent:{type: Number},
    },
    {
        timestamps: false,
        versionKey: false
    }
)

module.exports = mongoose.model('Product', productsSchema);