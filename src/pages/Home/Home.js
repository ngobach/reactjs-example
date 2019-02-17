import React from 'react';
import Helmet from 'react-helmet';
import { Heading, Button } from 'evergreen-ui';
import Box from 'ui-box';
import './Home.scss';
import Dashboard from '../../containers/Dashboard';
import Auth from '../../containers/Auth';

class Home extends React.PureComponent {
  render() {
    return (
      <Dashboard>
        <Helmet>
          <title>Homepage</title>
        </Helmet>
        <Box height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
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
                <Heading marginTop={8} marginBottom={8} size={900} color="#FFFFFF">Welcome back {user.username}</Heading>
                <Box>
                  <img src="https://media.giphy.com/media/O2imWWcO8Mgco/giphy.gif" />
                </Box>
              </React.Fragment>
            )}/>
          </div>
        </Box>
      </Dashboard>
    );
  }
}

export default Home;
