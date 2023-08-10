require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const dbUri = process.env.MONGODB_URI;
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("This is my Portfolio Application");
});

require("./startup/route")(app);

async function connectMongodb() {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongodb");
  } catch (error) {
    console.error("Error connecting to mongoDB.", error);
  }
}

connectMongodb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
