const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
    res.redirect(301, "https://twitter.com")
})
 
app.listen(3000)