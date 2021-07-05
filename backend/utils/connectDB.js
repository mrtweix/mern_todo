import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose?.connection?.readyState) {
    return true;
  } else if (mongoose.connection.readyState === 1) {
    mongoose.connection.close(() => process.exit(0));
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`Connect to MongoDB ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error connecting to MongoDB ${error}`.red.underline.bold);
  }
};

export default connectDB;
