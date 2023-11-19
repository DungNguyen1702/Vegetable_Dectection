const express = require('express')

const routes = require('./routes')
const path = require('path');
const cors = require('cors');

const app = express()

app.use(express.json());

// Sử dụng middleware CORS
app.use(cors());

const staticPath = path.join(__dirname, 'public');

app.get('/',(req,res) => {
    res.send('Vegetable_detection_mobile_api')
})

app.use(express.static(staticPath));
app.use('/public', express.static('public'))

app.use('/api/auth', routes.auth)
app.use('/api/fruit', routes.fruit)
app.use('/api/user', routes.user)

module.exports = app