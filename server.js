const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({ optionsSuccessStatus: 200 }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip
  const language = req.headers['accept-language']
  const software = req.headers['user-agent']
  res.json({ ipaddress, language, software })
})

app.listen(process.env.PORT ?? 3000, () => {
  console.info('Server is up')
})