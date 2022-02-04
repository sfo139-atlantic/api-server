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
  },
  getById: async (req, res) => {
    const profiles = await model.getById(req.params.id);
    console.log(profiles[0].proposals)
    res.send(profiles);
  },
  createProposal: async (req, res) => {
    const proposal = await model.createProposal(req.body.proposal);
    res.status(201).send()
  },
  updateProposal: async (req, res) => {
    const proposal = await model.updateProposal(req.body.proposal);
    res.status(201).send()
  },
  updateSkill: async (req, res) => {
    const skill = await model.updateSkill(req.body.skill);
    res.status(201).send()
  },
}