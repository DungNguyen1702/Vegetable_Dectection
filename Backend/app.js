const express = require('express')

const routes = require('./routes')
const path = require('path');
const cors = require('cors');

const app = express()

app.use(express.json());

// Sử dụng middleware CORS
app.use(cors());



app.get('/',(req,res) => {
    res.send('Vegetable_detection_mobile_api')
})

// Public image
const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));
app.use('/public', express.static('public'))

// public View
const uiPath = path.join(__dirname, 'UI/view');
app.use(express.static(uiPath));
app.use('/ui', express.static('ui'))

app.use('/api/auth', routes.auth)
app.use('/api/fruit', routes.fruit)
app.use('/api/user', routes.user)
app.use('/api/history', routes.history)
app.use('/api/like', routes.like)

app.use('/ui', routes.ui)


module.exports = app