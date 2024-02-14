const username = process.env.MONGO_USER
const password = process.env.MONGO_PASSWORD

module.exports = {
  uri: `mongodb+srv://${username}:${password}@cluster0.3pphasg.mongodb.net/?retryWrites=true&w=majority`
};