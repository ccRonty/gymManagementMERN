const express = require('express');
const app = express();
const DBConn = require('./DBConnection/connection')

const PORT = 4000;

app.get("/", (req, res) => {
  res.send({ "message": "Server is running at port 4000....................." })
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})