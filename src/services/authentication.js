import users from './user';

const authService = {
  async register({ username, email, password }) {
    const user = {
      username,
      email,
      password, // bcrypt?
      fullname: '',
      homepage: '',
    };
    
    await users.create(user);
  },

  login(username, password) {
    const user = users.findByCredential(username, password);
    if (!user) {
      throw new Error('No matching user found');
    }
    return user;
  }
};

export default authService;
