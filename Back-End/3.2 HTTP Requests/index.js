import express from "express"
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
  res.send("<h1> HomePage </h1>");
});

app.get("/about",(req,res)=>{
  res.send("<h1> About Me </h1> <h3> I am Prateek Sahu </h3>");
});

app.get("/contact",(req,res)=>{
  res.send("<h1> Contact Me </h1> <h3> Insta: prateek_sahu_45 <br> Phone No. 7828089839 </h3>");
});

app.listen(port,()=>{
  console.log("Server is started");
});