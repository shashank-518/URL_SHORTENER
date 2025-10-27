import express from "express";
import { handleShortUrl, handleAnalytics } from "../Controllers/url.js";

const Router = express.Router();

// Public access (no login needed)
Router.post("/", handleShortUrl);
Router.get("/analytics/:shortURl", handleAnalytics);

export default Router;

