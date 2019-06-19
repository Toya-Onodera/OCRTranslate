const express = require('express')
const path = require('path')
const router = express.Router()

router
    .get('/', (req, res) => {
        res.sendFile(__dirname, 'index.html')
    })

    .get('/app/camera', (req, res) => {
        res.sendFile(path.join(__dirname, '../public', 'camera.html'))
    })

    .get('/app/translate', (req, res) => {
        res.sendFile(path.join(__dirname, '../public', 'translate.html'))
    })

module.exports = router