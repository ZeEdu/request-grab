const Request = require("../model/Request");

class RequestController {
  async store(req, res) {
    const data = await Request.create({body: JSON.stringify(req.body)});
    return res.json(data);
  }
  async index(req, res) {
    const data = await Request.find({});

    return res.json(data);
  }
}

module.exports = new RequestController();