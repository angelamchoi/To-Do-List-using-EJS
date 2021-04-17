const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express(); 

const items = ["Buy Ramen", "Make Pizza", "Practice Coding", "Babysit Baby Yoda"];
const workItems = [];

app.set('view engine', 'ejs'); //ejs

app.use(bodyParser.urlencoded({extended:true})); // using body parser
app.use(express.static("public"));

app.get("/", function(req, res) {

let day = date.getDate(); //activates date function

  res.render("list",{kindOfDay:day, newListItems: items}); //shows it on html
});

app.post("/", function(req,res) {
    let item = req.body.newItem;

    items.push(item);
    res.redirect("/");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});



