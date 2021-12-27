const express = require("express");
const config = require("config");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get("port") || 5000;

const start = async () => {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
    });
    app.listen(5000, () =>
      console.log(`App has been started on port ${PORT}...`)
    );
  } catch (error) {
    console.log("Server err", error.message);
    process.exit(1);
  }
};

start()
