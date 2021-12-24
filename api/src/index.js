const express = require('express') 
const app = express()
const port = 3001
const cors = require('cors') 
const morgan = require('morgan') 
const router = require("./routes.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true,}));
app.use(morgan('dev'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(router)

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

