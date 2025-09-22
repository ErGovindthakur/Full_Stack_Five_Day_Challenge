import mongoose  from "mongoose";

export const connectDb = async() => {
     try {
          mongoose.connect(process.env.MONGO_URI);

          mongoose.connection.on("connected",()=>{
               console.log("Db Connected Successfully...");
          })

          mongoose.connection.on("error",()=>{
               console.log("Db connection error from try...");
          })
     } catch (err) {
          console.log(err.message);
          process.exit(1);
     }
}