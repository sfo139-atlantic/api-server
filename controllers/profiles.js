const model = require('../models/profiles.js');
module.exports = {
  get:async (req, res) => {
    const profiles = await model.get();
    res.send(profiles);
  },
  getById: async (req, res) => {
    const profiles = await model.getById(req.params.id);
    console.log(profiles[0].proposals)
    res.send(profiles);
  }
}