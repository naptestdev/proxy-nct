const express = require("express");
const { getHome, getPlaylists } = require("nhaccuatui-api-full");

const app = express();

app.get("/", async (req, res) => {
  try {
    const data = await getHome();
    res.json(data);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.get("/playlists", async (req, res) => {
  try {
    const data = await getPlaylists();
    res.json(data);
  } catch (error) {
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 5000;
app.listen(port);
