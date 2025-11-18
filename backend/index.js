import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("hi!");
});

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});