const express = require("express");
const app = express();
const cors = require('cors');
const mongooseConnect = require("./config/config")
const userRouter = require("./routes/authRoutes");
const cookieparser = require('cookie-parser');

// Connect to Database
mongooseConnect();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

// Use cookie-parser middleware
app.use(cookieparser());

// Routes
app.use('/', userRouter);

app.listen(5000, () => {
    console.log('server running on port 5000');
});