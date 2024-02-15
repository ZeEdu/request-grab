const Request = require('../model/Request')

class RequestController {
  async store (req, res) {
    const body = JSON.stringify(req.body)
    const headers = JSON.stringify(req.headers)
    const data = await Request.create({ body, headers })
    return res.json(data)
  }

  async index (req, res) {
    const data = await Request.find({})
    return res.json(data)
  }
}

module.exports = new RequestController()
