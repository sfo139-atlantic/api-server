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
  }
}