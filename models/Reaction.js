const { Schema, Types } = require('mongoose');

// Creates reaction Schema model
const reactionSchema = new Schema(
  {
    reactionId: {
      // Uses Mongoose ObjectId data type
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use a getter method to format the Local timestamp on query
      get: (date) => date.toLocaleDateString()
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
