const mongoose = require('mongoose');

const { Schema } = mongoose;

const billsSchema = new Schema(
    {
        productId: { type: Schema.Types.ObjectId, ref: 'Product' },
        firmId: { type: Schema.Types.ObjectId, ref: 'Firm' },
        billNo: { type: Number },
        billDate: {type: Date},
        weight: {type: Number},
        weightUnit: {type: String},
        rate: {type: Number},
        amount: {type: Number},
        sgstAmount: { type: Number },
        cgstAmount: { type: Number },
        igstAmount: { type: Number },
        roundOff: { type: Number },
        totalAmount: { type: Number },
        vehicleNumber: { type: String },
        totalAmountInWords: {type: String},
        ewayBillId: {type: Number}
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('Bill', billsSchema);