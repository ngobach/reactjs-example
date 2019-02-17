import React from 'react';
import Helmet from 'react-helmet';
import { Heading, Button } from 'evergreen-ui';
import './Home.scss';
import Beauty from '../../containers/Beauty';
import Auth from '../../containers/Auth';

class Home extends React.PureComponent {
  render() {
    return (
      <Beauty>
        <Helmet>
          <title>Homepage</title>
        </Helmet>
        <div className="home">
          <Auth guest={() => (
            <React.Fragment>
              <Heading size={900} color="#FFFFFF">Example React Project</Heading>
              <Heading marginTop={8} marginBottom={8}>What should we do next?</Heading>
              <Button marginRight={12} appearance="primary" intent="success" onClick={() => this.props.history.push('/register')}>Register</Button>
              <Button appearance="primary" onClick={() => this.props.history.push('/login')}>Login</Button>
            </React.Fragment>
          )} auth={user => (
            <React.Fragment>
              <Heading marginTop={8} marginBottom={8}>Welcome back {user.username}</Heading>
              <Button appearance="primary" onClick={() => this.props.history.push('/profile')}>My Profile</Button>
            </React.Fragment>
          )}/>
        </div>
      </Beauty>
    );
  }
}

export default Home;
