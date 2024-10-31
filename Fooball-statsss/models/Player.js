// const mongoose = require("mongoose");

// const playerSchema = new mongoose.Schema(
//   {
//     playerName: { type: String, required: true },
//     team: { type: String, required: true },
//     minutesPlayed: { type: String, required: true },
//     image: { type: String, required: true },
//     PassingAccuracy: { type: String, required: true },
//     isCaptain: { type: Boolean, default: false },
//     position: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Postion",
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Player", playerSchema);
const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    playerName: { type: String, required: true },
    team: { type: String, required: true },
    minutesPlayed: { type: Number, required: true },
    image: { type: String, required: true },
    PassingAccuracy: { type: Number, required: true },
    isCaptain: { type: Boolean, default: false },
    position: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Position",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);
