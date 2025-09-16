const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto');
// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A name is required'],
    },
    email: {
      type: String,
      required: [true, 'A email is required'],
      unique: true,
      validate: [validator.isEmail, 'Invalid email'],
    },
    photo: {
      type: String,
      select: true,
      default: 'default.jpg',
    },
    password: {
      type: String,
      required: [true, 'A password is required'],
      min: [8, 'minimum 8 characters of password'],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Password confirm is required'],
      validate: function (value) {
        return value === this.password;
      },
      default: undefined,
    },
    passwordResetToken: {
      type: String,
      default: undefined,
    },
    passwordResetTimeout: {
      type: Date,
      default: undefined,
    },

    passwordChangedAt: {
      type: Date,
      default: Date.now(),
    },
    role: {
      type: String,
      // enum: ['admin', 'lead-guide', 'user'],
      default: 'user',
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

//for virtually refrencing from child==>userSchema to parent==>booking
userSchema.virtual('booking', {
  ref: 'booking',
  foreignField: 'user',
  localField: '_id',
});

userSchema.pre(/^find/, function (next) {
  if (!this.active) this.find({ active: { $ne: false } });
  next();
});
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.method('generateToken', function () {
  const token = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');
  this.passwordResetTimeout = new Date(Date.now() + 10 * 60 * 1000);
  return token;
});

userSchema.method('checkPassword', async (dbPassword, enteredPassword) => {
  const result = await bcrypt.compare(enteredPassword, dbPassword);
  return result;
});

userSchema.method('changedPasswordAt', function () {
  this.passwordChangedAt = Date.now() - 2000; //this is the actual logic to reduce to 2 sec so we get token validitated
});

userSchema.method('checkDateJwt', function (JWTdate) {
  const iat = JWTdate;
  const passwordChangedDate = Number.parseInt(
    new Date(this.passwordChangedAt).getTime() / 1000,
    10,
  );

  return iat > passwordChangedDate;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
