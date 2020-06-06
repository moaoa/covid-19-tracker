const express = require('express')
const app = express()
const path = require('path')
app.get('*', (req, res) => {
    const filePath = path.join(__dirname, 'client', 'build', 'index.html')
    app.use(express.static('./build'))
    res.sendFile(filePath)
})

app.listen(process.env.PORT || 5000, () => console.log('connected'))
