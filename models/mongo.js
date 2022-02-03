const {MongoClient} = require('mongodb');
const { MONGO_URI } = require('../config.js');
const client = new MongoClient(MONGO_URI);


client.connect()
  .then(console.log('Successfully connected to MongoDB'))
  .catch(console.error);

  const db = client.db('hireup');
  const chats = db.collection('chats');
  const profiles = db.collection('profiles');

  module.exports = {
    db: db,
    chats: chats,
    profiles: profiles,
  };
