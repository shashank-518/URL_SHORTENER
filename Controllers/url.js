import { nanoid } from "nanoid";
import URL from "../Models/url.js";

export async function handleShortUrl(req, res) {
  try {
    const { Url } = req.body;
    if (!Url || Url.trim() === "") {
      return res.status(400).json({ msg: "URL is required" });
    }

    const shortid = nanoid(8);

    await URL.create({
      shortURl: shortid,
      OrginalUrl: Url,
      History: [],
    });

    return res.render("home", { id: shortid });
  } catch (error) {
    console.error("Error creating short URL:", error.message);
    res.status(500).send("Internal Server Error");
  }
}

export async function handleAnalytics(req, res) {
  try {
    const { shortURl } = req.params;
    const result = await URL.findOne({ shortURl });

    if (!result) return res.status(404).json({ msg: "Short URL not found" });

    res.json({
      shortURl,
      "Total Clicks": result.History.length,
      analytics: result.History,
    });
  } catch (error) {
    console.error("Error fetching analytics:", error.message);
    res.status(500).send("Internal Server Error");
  }
}
