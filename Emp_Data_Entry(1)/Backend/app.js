const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const { connectDb } = require('./config/db')
const { router } = require('./routes/emp.routes')

const app = express()
dotenv.config({})

connectDb()

const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(cors("*"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/emp",router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})