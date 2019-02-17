import EventEmitter from 'events';
import users from './user';
import utils from './utils';

const authService = {
  current: null,
  events: new EventEmitter(),

  async register({ username, email, password }) {
    await utils.delay(500);
    const user = {
      username,
      email,
      password, // bcrypt?
      fullname: '',
      homepage: '',
      country: '',
      notifyMe: false,
    };
    
    await users.create(user);
  },

  async login(username, password) {
    await utils.delay(500);
    const user = users.findByCredential(username, password);
    if (!user) {
      throw new Error('No matching user found');
    }
    return user;
  },

  setCurrent(user) {
    this.current = user;
    this.events.emit('stateChanged', user);
  }
};

export default authService;
