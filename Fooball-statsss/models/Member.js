// const mongoose = require("mongoose");

// const memberSchema = new mongoose.Schema(
//   {
//     key: { type: String, required: true },
//     code: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Member", memberSchema);
const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    key: { type: String, required: true },
    code: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", memberSchema);
