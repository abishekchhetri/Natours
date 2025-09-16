/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//doing express rate limiting now

dotenv.config({ path: `./conf.env` });
const app = require('./app');
const DB = process.env.DATABASE.replace(
  '<db_password>',
  process.env.DATABASE_PASSWORD,
);

//connecting the database to mongodb
mongoose.connect(DB).then(() => {
  console.log('database connection successful!');
});

const port = 3000;
const server = app.listen(process.env.PORT || port, () => {
  console.log('server is running at 3000 port');
});

//so if any errors occur and it is the last resort to do stuffs we do like as :
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  //after this we exit the process gracefully
  server.close(() => {
    console.log('stopping the process!');
    process.exit(1);
  });
});

//for synchronous code uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    console.log('stopping process!');
    process.exit(1);
  });
});

//ex gives :
