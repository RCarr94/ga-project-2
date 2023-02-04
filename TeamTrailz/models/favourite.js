const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favouriteSchema = new Schema(
  {
    trail: String,
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    userName: String,
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('Favourite', favouriteSchema);
