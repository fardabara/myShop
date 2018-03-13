module.exports = function (mongoose) {
  return mongoose.model('User', {
    username: {
      type: String,
      trim: true,
      required: true
    },
    password: {
      type: String,
      trim: true
    }

  });
};