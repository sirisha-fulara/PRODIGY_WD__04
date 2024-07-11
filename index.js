import bodyparser from "body-parser";
import express from "express";
import ejs from "ejs";

const port = 3000;
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/index", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/works", (req, res) => {
    res.render("works.ejs");
});

app.get("/resume", (req, res) => {
    res.render("resume.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})