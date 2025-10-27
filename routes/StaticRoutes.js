import express from "express";
import URL from "../Models/url.js";

const StaticRouter = express.Router();

StaticRouter.get("/", async (req, res) => {
  try {
    const allurl = await URL.find({});
    res.render("home", { allLink: allurl });
  } catch (error) {
    console.error("Error fetching URLs:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

export default StaticRouter;
