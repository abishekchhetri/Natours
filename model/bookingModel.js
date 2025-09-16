const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema(
  {
    tour: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: 'Tour',
    },
    user: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: 'User',
    },
    price: {
      type: Number,
      required: true,
    },
    paid: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

//populating the booking schema to each find query on find query
bookingSchema.pre(/^find/, function (next) {
  this.populate('tour').populate('user');
  next();
});

//model for booking schema
const Booking = mongoose.model('booking', bookingSchema);
module.exports = Booking;
