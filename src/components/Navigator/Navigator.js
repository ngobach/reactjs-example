import React from 'react';
import { withRouter } from 'react-router-dom';
import Box from 'ui-box';
import { Strong, Heading, Link } from 'evergreen-ui';
import './Navigator.scss';
import Auth from '../../containers/Auth';
import authService from '../../services/authentication';

class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.doLogout = this.doLogout.bind(this);
  }

  doLogout() {
    authService.setCurrent(null);
  }

  render() {
    return (
      <div className="navigator">
        <div className="logo">
          <Heading size={700} color="#FFFFFF" cursor="pointer" onClick={() => this.props.history.push('/')}>BachNX</Heading>
        </div>
        <div className="nav">
          <Auth
            guest={() => (
              <Box>
                <Strong color="#FFFFFF" cursor="pointer" onClick={() => this.props.history.push('/login')}>Login</Strong> {" / "}
                <Strong color="#FFFFFF" cursor="pointer" onClick={() => this.props.history.push('/register')}>Register</Strong>
              </Box>
            )}
            auth={(x) => (
              <Box>
                <Strong color="#FFFFFF">Hi, {x.username}</Strong> {" / "}
                <Strong color="#FFFFFF" cursor="pointer" onClick={() => this.props.history.push('/profile')}>My Profile</Strong> {" / "}
                <Strong color="#FFFFFF" cursor="pointer" onClick={this.doLogout}>Logout</Strong>
              </Box>
            )}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Navigator);
