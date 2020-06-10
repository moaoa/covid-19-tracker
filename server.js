const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('client/build'))

app.get('*', (req, res) => {
    const filePath = path.join(__dirname, 'client', 'build', 'index.html')

    res.sendFile(filePath)
})

app.listen(process.env.PORT || 5000, () => console.log('connected'))
