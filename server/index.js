const connectToDB = require('./db/dbConnect.js')
const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(require('./routes/adsRoute.js'))
connectToDB()

app.listen(3001, () => {
    console.log('Server Started on 3001')
})
// const fetchData = require('./controller/fetchData.js')

