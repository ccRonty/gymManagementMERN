const mongoose = require('mongoose')

const membershipSchema = mongoose.Schema({
  months: {
    type: String,
    required: true,
  }, price: {
    type: Number,
    required: true,
  },
  gym: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "gym",
    required: true,
  }
}, { timestamps: true })

const membershipModel = mongoose.model("membership", membershipSchema)

module.exports = membershipModel;