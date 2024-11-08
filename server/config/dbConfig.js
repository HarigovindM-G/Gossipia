const mangoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mangoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.log(err));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
