const express = require('express') 
const app = express()
const port = 3001
const cors = require('cors') 
const morgan = require('morgan') 
const router = require("./routes.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(router)

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

