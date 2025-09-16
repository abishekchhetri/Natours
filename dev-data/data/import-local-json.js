const dotenv = require('dotenv');
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');
const fs = require('fs');
const Tour = require('../../model/tourModel');
const Review = require('../../model/reviewModel');
const User = require('../../model/userModel');

dotenv.config({ path: `../../conf.env` });

console.log(process.env.DATABASE);

const DB = process.env.DATABASE.replace(
  '<db_password>',
  process.env.DATABASE_PASSWORD,
);
//connecting the database to mongodb
mongoose.connect(DB).then(() => {
  console.log('database connection successful!');
});

const tourJson = JSON.parse(fs.readFileSync('./tours.json', 'utf-8'));
const userJson = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
const reviewJson = JSON.parse(fs.readFileSync('./reviews.json', 'utf-8'));

const importJson = async () => {
  try {
    // await Tour.create(tourJson);
    await User.create(userJson);
    // await Review.create(reviewJson);

    console.log('successfully exported!!');
    process.exit();
  } catch (err) {
    console.log(err);

    console.log('error occured!');
  }
};

const deleteJson = async () => {
  try {
    // await Tour.deleteMany();
    await User.deleteMany();
    // await Review.deleteMany();
    console.log('successfully deleted!!');
    process.exit();
  } catch (err) {
    console.log('error occured!');
  }
};
if (process.argv[2] === '--import') {
  importJson();
}
if (process.argv[2] === '--delete') {
  deleteJson();
}
