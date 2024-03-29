import dotenv from "dotenv";
import express from 'express';
import { mongoose } from 'mongoose';
import userRoute from "./routes/user.route.js";

const app = express();

dotenv.config()

const connect = async() =>{
try {

mongoose.connect(process.env.MONGO)
}catch(e) {
    handleError(e);
}

app.use("/api/users", userRoute);

}
app.listen(8800, ()=>{
    connect();
    console.log("Backend server is running")
});