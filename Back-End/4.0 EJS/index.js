import express from "express";

const date = new Date();
const day =date.getDay();

const app = express();
const port = 3000;

var value1 = "";
var value2 = "";

// app.set("view engine", "ejs");

if(day==0||day==6) value1="weekend"
else value1 = "weekday";

if(value1 === "weekend") value2 = " have fun!!";
else value2 = " work hard!!";

app.get("/",(req,res)=>{
    res.render("index.ejs",{day:value1,work:value2});
});



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});