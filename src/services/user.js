import db from './db';

const users = {
  findByUsername(username) {
    return db.get('users').find({ username }).value();
  },
};

export default users;
