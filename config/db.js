const mongoose = require("mongoose");
const { dbUrl } = require("../env");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

getConnection = async () => {
  try {
    await mongoose.connect(dbUrl, options);

    console.log("DB connected");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
};

getConnection();
