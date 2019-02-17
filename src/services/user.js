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

  create(user) {
    if (this.findByEmail(user.email) || this.findByUsername(user.username)) {
      throw new Error('Email or username is already existing');
    }
    db.get('users').push(user).write();
  },

  async update(username, user) {
    if (!await this.findByUsername(username)) {
      throw new Error('User not found');
    }
    db.get('users').find({ username }).assign(user).write();
    return user;
  },
};

export default users;
