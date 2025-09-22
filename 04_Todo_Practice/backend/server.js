import app from "./src/app.js";
import dotenv from "dotenv"
dotenv.config();

const port = process.env.PORT || 7070;

const startServer = async() => {
     app.listen(port,()=>{
          console.log(`server is running at http://localhost:${port}`);
     })
}
startServer();