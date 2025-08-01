import express from "express";

const app = express();
const port = 3000;

const logger = (req,res,next)=>{
  const method = req.method;
  const url = req.URL;
  const ip = req.IP;
  console.log(`Method = ${method}  url = ${url}  ip = ${ip} `);
  next();
}

function login (req,res,next){
  console.log(`Method = ${req.method} `);
  next();
}

app.use(logger);
app.use(login);


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
