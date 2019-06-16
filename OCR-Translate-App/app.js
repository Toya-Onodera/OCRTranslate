const express = require('express')
const app = express()
const http = require('http').Server(app)
const PORT = process.env.PORT || 80
var io = require('socket.io')(http)

// 静的ファイルの利用を可能にする
app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.send('Hello, World')
    res.sendFile(__dirname, 'index.html')
})

// Socket.io の接続を確立する
io.on('connection', socket => {
    console.log('a user connected')

    socket.on('disconnect', () => {
        console.log('user disconnected')
    });
})

// サーバー起動後
http.listen(PORT, () => {
    console.log(`OCR-Translate-App is runnning ... (PORT: ${PORT})`)
})