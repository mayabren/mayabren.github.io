const express = require('express')
const app = express()

// Code here for how to set 'public' as the static folder for express
app.use(express.static('public'))

// Code here to have the app listen on port 8080....please provide a console.log message
app.listen(8080);

console.log('server running on port 8080');