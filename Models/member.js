const mongoose = require('mongoose')

const memberSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Active",
  },
  lastPayment: {
    type: Date,
    default: new Date(),
  },
  nextBillDate: {
    type: Date,
    required: true,
  },
  gym: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "gym",
    required: true,
  },
  membership: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "membership",
    required: true,
  },
}, { timestamps: true })

const memberModel = mongoose.model("member", memberSchema)

module.exports = memberModel;