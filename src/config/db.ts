// import mongoose from "mongoose";

// const connectDB = async (): Promise<void> => {
//   try {
//     const mongoURI = process.env.MONGODB_URI;

//     if (!mongoURI) {
//       throw new Error(
//         "MONGODB_URI is not defined in the environment variables"
//       );
//     }

//     await mongoose.connect(mongoURI);

//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     process.exit(1);
//   }
// };

// export default connectDB;
