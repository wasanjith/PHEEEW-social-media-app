import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";


dotenv.config();
const app = express();

console.log(process.env.MONGO_URI); // Corrected from MOGO_URI to MONGO_URI

app.use(express.json()); // to pass req.body
app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});

