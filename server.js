const express = require("express");
const hbs = require("hbs");

hbs.registerPartials(__dirname + "/views/partials");
const app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => { return new Date().getFullYear(); });

app.get("/", (req, res) => {
    //res.send("Hello Express!");
    res.render("home.hbs", {
        "pageTitle": "Home page"        
    });
});

app.get("/help", (req, res) => {
    res.render("help.hbs", {
        "pageTitle": "Help page"        
    });
});

app.listen("3000", () => {
    console.log("server is running.....");
});