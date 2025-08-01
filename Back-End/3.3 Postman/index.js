import express from "express";
const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

app.get("/",(req,res)=>{
  res.send("<h1> HomePage </h1>");
});

app.post("/register",(req,res)=>{
  // DO SOMETHING WITH DATA
  res.sendStatus(201);
});

app.patch("/user/prateek",(req,res)=>{
  // CHANGE SOME INFORMATION
  res.sendStatus(200);
});

app.put("/user/prateek",(req,res)=>{
  // CHANGE ALL THE INFORMATION
  res.sendStatus(200);
});

app.delete("/user/prateek",(req,res)=>{
  // DELETING USER
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
