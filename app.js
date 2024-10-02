require("dotenv").config;
const express = require("express");
const dbConnection = require("./db/dbConfig");
const app = express();
const port = 5500;

//user routes middleware file
const userRoutes = require("./routes/userRoute");

//question routes middleware file
const questionRoutes = require("./routes/questionRoute");
//authentication middleware file
const authMiddleware = require("./middleware/authMiddleware");

//json middleware to extract json data
app.use(express.json());

//user routes middleware
app.use("/api/users", userRoutes);

//question routes middleware below
app.use("/api/questions", authMiddleware, questionRoutes);

//answer routes middleware below

async function start() {
  try {
    const result = await dbConnection.execute("select 'test'");
    await app.listen(port);
    console.log("Database connected");
    console.log(`listening on http://localhost:${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();

// app.listen(port, (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(`listening on http://localhost:${port}`);
//   }
// });
