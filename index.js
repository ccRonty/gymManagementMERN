const express = require('express');
const app = express();
require('dotenv').config()
const DBConn = require('./DBConnection/connection')
app.use(express.json());

const GymRoutes = require('./Routes/gym')
app.use('/gym', GymRoutes)



const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send({ "message": "Server is running at port 4000....................." })
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

