const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routers')
const port = 6767

app.use(express.json())
app.use(cors())
app.use('/',router)

app.listen(port, () => console.log(`Server is running on port: ${port}`))

