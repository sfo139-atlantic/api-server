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
  getOne: async (uid) => {
    try {
      const profiles = await db.profiles.find({_id: uid}).toArray();
      return profiles;
    } catch(e) {
      throw e;
    }
  },

  post: async ({_id, email}) => {
    const firstName = '';
    const lastName = '';
    const freelancer =  {
      "Production Manager": false,
      "Designer": false,
      "Software Engineer": false
    };
    const rate = 0;
    const work_history ='';
    const skills = [];
    const education ='';
    const location = '';
    const portfolio = [];
    const proposals = [];
    const profile_pic ='https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png';
    const timezones = [];
    try {
      const result = await db.profiles.insertOne({_id, email, firstName, lastName, freelancer, rate, work_history, skills, education, location, portfolio, proposals, profile_pic, timezones});
      return true
    } catch(e) {
      throw e
    }
  },
  put: async ({_id, info}) => {
    const {firstName, lastName, freelancer, rate, work_history, skills, education, location, portfolio, proposals, profile_pic, timezones} = info;
    try {
      const result = await db.profiles.updateOne({_id},{$set:{
        firstName, lastName, freelancer, rate:Number(Number(rate).toFixed(2)), work_history, skills, education, location, portfolio, proposals, profile_pic, timezones
      }})
      return true;
    } catch(e) {
      throw e;
    }
  },
  delete: async (_id) => {
    try{
      const result = await db.profiles.deleteOne({_id});
      return true;
    } catch (e) {
      throw e;
    }
  }
}
