import path from "path";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js"
import notificationRoutes from "./routes/notification.routes.js"
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from "cloudinary";


dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

console.log(process.env.MONGO_URI); // Corrected from MOGO_URI to MONGO_URI
app.use(express.json({limit:"5mb"})); // to pass req.body
app.use(express.urlencoded({ extended: true})); // to pass from data(urlencoded)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", notificationRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.json(__dirname, "/frontend/dist")));
    app.get("*" , (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});

