import React from 'react';
import authService from '../../services/authentication';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: authService.current };
    this.authStateHandler = this.authStateHandler.bind(this);
  }
  
  componentDidMount() {
    authService.events.on('stateChanged', this.authStateHandler);
  }

  componentWillUnmount() {
    authService.events.off('stateChanged', this.authStateHandler);
  }

  authStateHandler(newCurrent) {
    this.setState({ current: newCurrent });
  }

  render() {
    const { current } = this.state;
    if (this.props.auth && current) {
      return this.props.auth(current);
    } else if (this.props.guest && !current) {
      return this.props.guest(current);
    } else {
      return false;
    }
  }
}

export default Auth;
