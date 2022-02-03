const db = require('./mongo.js');
module.exports = {
  get: async () => {
    try {
      const profiles = await db.profiles.find().toArray();
      return profiles;
    } catch (e) {
      throw e;
    }
  },
  getById: async (id) => {
    try {
      const profiles = await db.profiles.find({ _id: id }).toArray()
      return profiles;
    } catch (e) {
      throw e;
    }
  },
  createProposal: async (proposal) => {
    try {
      const newProposal = await db.profiles.updateOne(
        {_id : proposal.userId},
        { $push: { proposals : {
          headline: proposal.headline,
          overview: proposal.overview,
          timeline: {
            start: proposal.start,
            end: proposal.end
          },
          location: proposal.location,
          timezones: proposal.skills,
          _id: proposal.id
        }} }
      )

      return newProposal
    } catch (e) {
      throw e
    }

  },
  updateProposal: async (proposal) => {
    console.log('model update{rp[psa', proposal)
    try {
      const newProposal = await db.profiles.findOneAndUpdate(
        {_id : proposal.userId, "proposals._id": proposal.id},
        { $set: {
            "proposals.$.headline": proposal.headline,
            "proposals.$.overview": proposal.overview,
            "proposals.$.timeline": {
              start: proposal.start,
              end: proposal.end
            },
            "proposals.$.location": proposal.location,
            "proposals.$.timezones": proposal.skills,
          }
        }
      )
      return newProposal
    } catch (e) {
      console.log(e);
    }

  },
  updateSkill: async (skill) => {
    console.log('db updateskill', skill)
    try {
      const newSkill = await db.profiles.findOneAndUpdate(
        {_id : skill.userId},
        {$set: {
          firstName: skill.firstName,
          lastName: skill.lastName,
          rate: skill.rate,
          work_history: skill.workHistory,
          skills: skill.skills,
          education: skill.education,
          location: skill.location,
          portfolio: skill.portfolio,
          timezones: skill.timezones
        }}
      )
    } catch (e) {
      throw e;
    }
  },
}