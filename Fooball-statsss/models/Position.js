// const mongoose = require("mongoose");

// const postionSchema = new mongoose.Schema(
//   {
//     position: { String, required: true },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Postion", postionSchema);
const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema(
  {
    position: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Position", positionSchema);
