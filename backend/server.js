import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.MONGO_URI); // Corrected from MOGO_URI to MONGO_URI
app.use(express.json()); // to pass req.body
app.use(express.urlencoded({ extended: true})); // to pass from data(urlencoded)
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});

