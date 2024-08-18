import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', false);

  if (isConnected) {
    console.log("Monoose already connected");
    return;
  }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
              useUnifiedTopology: true,
            dbName: "share_prompt",
          });
        
          isConnected = true;
          console.log("MongoDB connected");
    
} catch (error) {
    console.log("Error connecting to MongoDB", error);
}
  
}