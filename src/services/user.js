import db from './db';

const users = {
  findByCredential(username, password ) {
    return db.get('users').find({ username, password }).value();
  },

  findByUsername(username) {
    return db.get('users').find({ username }).value();
  },

  findByEmail(email) {
    return db.get('users').find({ email }).value();
  },

  async create(user) {
    if (this.findByEmail(user.email) || this.findByUsername(user.username)) {
      throw new Error('Email or username is already existing');
    }
    db.get('users').push(user).write();
  },
};

export default users;
