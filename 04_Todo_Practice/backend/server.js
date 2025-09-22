import app from "./src/app.js";
import dotenv from "dotenv"
import { connectDb } from "./src/db/db.js";
dotenv.config();

const port = process.env.PORT || 7070;

const startServer = async() => {
     await connectDb();
     app.listen(port,()=>{
          console.log(`server is running at http://localhost:${port}`);
     })
}
startServer();