const express = require('express')
const app = express()
const path =require('path')

require("dotenv").config(); 

app.use(express.json())
app.use(cors())
app.use(express.static(path.resolve(`${__dirname}/../build`))) 


app.listen(port, () => console.log(`Example app listening on port ${port}!`))