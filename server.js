import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from "url";

//configure env

dotenv.config();

//database connfig
connectDB();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log("frrrtr" + __dirname)

//rest object
const app = express();

//moiddleware
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")))
//
//routes 
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)

//rest api

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

//PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgCyan.white);
});
// bCuAsNteHOhICk4r
