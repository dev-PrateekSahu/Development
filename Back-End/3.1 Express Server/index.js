// import express from "express"
// const app = express();

// app.listen(3000,()=>{
//   console.log("Server is running on port 3000 ");
// });

// ALTER

import express from "express"
const app = express();
const port = 3000;

app.listen(port,()=>{
  console.log(`Server is running on port ${port}.`);
});