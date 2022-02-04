const model = require('../models/profiles.js');
module.exports = {
  get:async (req, res) => {
    const profiles = await model.get();
    res.send(profiles);
  },
  getOne: async (req, res) => {
    const profiles = await model.getOne(req.query.uid);
    res.send(profiles[0]);
  },
  post: async (req, res) => {
    const {_id, email} = req.body;

    model.post({_id, email}).then(result => {
      if(result) res.status(201).send();
    })
  },
  put: async (req, res) => {
    const {_id, info} = req.body;
    model.put({_id, info}).then(result => {
      if(result) res.status(204).send()
    })
  },
  delete: async (req, res) => {
    const {_id} = req.body;
    model.delete(_id).then(result => {
      if(result) res.status(204).send()
    })
  }
}