const express = require('express')
const app = express()
const http = require('http').Server(app)
const PORT = process.env.PORT || 80
const router = require('./router/index')
const io = require('socket.io')(http)

// 静的ファイルの利用を可能にする
app.use(express.static('public'))

// ルーティングの設定
app.use('/', router)

// 404
app.use((req, res, next) => {
  const error = new Error(`Cannot ${req.method} ${req.path}`)
  error.status = 404
  next(error)
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