const express = require('express');
//var request = require('request')
//const mysql = require('mysql');
const tipRoutes = require('./routers/tipRoutes')

const app = express();

app.use(tipRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

