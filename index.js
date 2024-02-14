const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const {body, params} = req
  const json = JSON.stringify({body, params}, null, 2)
  console.log(json);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})