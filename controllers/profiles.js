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
  },
  createProposal: async (req, res) => {
    const proposal = await model.createProposal(req.body.proposal);
    console.log('create Proposal controller', req.body.proposal)
    res.send('hi');
  },
  updateProposal: async (req, res) => {

    const proposal = await model.updateProposal(req.body.proposal);
    console.log('update Proposal controller', req.body.proposal)
    res.send('hi');
  },
  updateSkill: async (req, res) => {
    const skill = await model.updateSkill(req.body.skill);
    console.log('update skill controller', req.body.skill)
    res.send('hi');
  },

  },

  post: async (req, res) => {
    const {id, email} = req.body;

    model.post({id, email}).then(result => {
      if(result) res.status(201).send()
    })
  },

  put: async (req, res) => {
    const {id, email, info} = req.body;
    model.put({id, email, info}).then(result => {
      if(result) res.status(204).send()
    })
  },
  delete: async (req, res) => {
    const {id} = req.body;
    model.delete(id).then(result => {
      if(result) res.status(204).send()
    })
  }
}