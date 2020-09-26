const mongoose = require("mongoose");

const MemberSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  fee1: {
    type: Boolean,
    required: true,
  },
  fee2: {
    type: Boolean,
    required: true,
  },
  fee3: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Members", MemberSchema);
