const mongoose = require('mongoose');
const { Schema } = mongoose;

const favouriteSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    userName: String,
    userAvatar: String,
    trail: { type: Schema.Types.ObjectId, ref: 'Trail', required: true },
    trailTitle: String,
    trailDistance: Number,
    trailDifficulty: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Favourite', favouriteSchema);
