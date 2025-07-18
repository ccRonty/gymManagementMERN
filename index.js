const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors');
require('dotenv').config()
const DBConn = require('./DBConnection/connection')

app.use(cors({
  origin: "http://localhost:5173", //frontend react project url
  credentials: true
}))

app.use(express.json());
app.use(cookieParser());

const GymRoutes = require('./Routes/gym')
const MembershipRoutes = require('./Routes/membership')
const MemberRoutes = require('./Routes/member')

app.use('/gym', GymRoutes)
app.use('/plans', MembershipRoutes)
app.use('/members', MemberRoutes)


const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send({ "message": "Server is running at port 4000....................." })
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

