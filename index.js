const express = require('express')
const app = express()
const port = 3000
app.use(express.static('hihi'));


app.get('/', (req, res) => {
    res.send('hihi')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})