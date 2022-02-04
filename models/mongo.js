const {MongoClient} = require('mongodb');
const MONGO_URI = require('../config.js');
const client = new MongoClient(MONGO_URI);


client.connect()
  .then(console.log('Successfully connected to MongoDB'))
  .catch(console.error);

  const db = client.db('hireup');
  const messages = db.collection('messages');
  const profiles = db.collection('profiles');

  module.exports = {
    db: db,
    messages: messages,
    profiles: profiles,
  };
