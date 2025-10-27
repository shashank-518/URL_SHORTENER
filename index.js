import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { connectMongoDb } from "./Connection.js";
import URL from "./Models/url.js";
import Router from "./routes/Urlroutes.js";
import StaticRouter from "./routes/StaticRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// ✅ Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ✅ View engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// ✅ Database connection
connectMongoDb(process.env.MONGO_URL)
  .then(() => console.log("✅ Database Connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));

// ✅ Routes setup (no authentication)
app.use("/", StaticRouter);
app.use("/url", Router);

// ✅ Redirect short URL to original link
app.get("/:shortURl", async (req, res) => {
  const shortURl = req.params.shortURl;

  try {
    const entry = await URL.findOneAndUpdate(
      { shortURl },
      {
        $push: { History: { timeStamp: Date.now() } },
      },
      { new: true }
    );

    if (!entry) {
      return res.status(404).send("Short URL not found");
    }

    const originalUrl = entry.OrginalUrl;
    const redirectUrl =
      originalUrl.startsWith("http://") || originalUrl.startsWith("https://")
        ? originalUrl
        : `http://${originalUrl}`;

    return res.redirect(redirectUrl);
  } catch (err) {
    console.error("Error redirecting:", err.message);
    res.status(500).send("Internal Server Error");
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT} 🔥`);
});
