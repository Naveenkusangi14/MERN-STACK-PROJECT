import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Enable CORS with options
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Parse incoming request bodies
app.use(express({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json());
// Serve static files from the "public" directory
app.use(express.static("public"));


const corsOption = {
  origin:"  http://localhost:5173",
  methods:"GET , POST , PUT , DELETE PATCH , HEAD",
  credentials:true

}
// Parse cookies
app.use(cookieParser());

// Import and use user routes

import router from "./routes/auth.router.js";

app.use("/api/v1/auth", router);
import contactForm from "./routes/contact.router.js";
app.use("/api/v1/form" , contactForm)


export { app };
