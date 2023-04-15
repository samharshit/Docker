import express from 'express'

const port = 8080

const app = express()

app.use('/', async(req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log('listening on port', port)
})