const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    response.sendFile(__dirname + "/beer.html");
});

app.listen(3000, function(){
    console.log("server run on port 3000");
});