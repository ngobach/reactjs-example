import React from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Pane, Text, Heading, Link, Button } from 'evergreen-ui';
import Box from 'ui-box';
import Dashboard from '../../containers/Dashboard';
import Auth from '../../containers/Auth';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    return (
      <Dashboard>
        <Helmet>
          <title>My profile</title>
        </Helmet>
        <Auth guest={() => <Redirect to="/"/>} auth={user => (
          <Box className="profile">
            <Pane width="100%" background="tint2" border="muted" marginTop={32} padding={64} elevation={1}>
              <Heading size={600}>My Profile</Heading>
              <Box display="flex" marginY={16}>
                <Box flex="1">
                  <Heading size={100}>Username</Heading>
                  <Text>{user.username}</Text>
                </Box>
                <Box flex="1">
                  <Heading size={100}>Full Name</Heading>
                  <Text>{user.fullname}</Text>
                </Box>
              </Box>
              <Box display="flex" marginY={16}>
                <Box flex="1">
                  <Heading size={100}>Email</Heading>
                  <Text>{user.email}</Text>
                </Box>
                <Box flex="1">
                  <Heading size={100}>Country</Heading>
                  <Text>{user.country}</Text>
                </Box>
              </Box>
              <Box display="flex" marginY={16}>
                <Box flex="1">
                  <Heading size={100}>Website</Heading>
                  <Link target="_blank" href={user.homepage}>{user.homepage}</Link>
                </Box>
                <Box flex="1">
                  <Heading size={100}>Receive notifications</Heading>
                  <Text>{user.notifyMe ? 'Yes' : 'No'}</Text>
                </Box>
              </Box>

              <Box>
                <Button appearance="primary" marginRight={8} onClick={() => this.props.history.push('/profile/edit')}>Edit</Button>
              </Box>
            </Pane>
          </Box>
        )}/>
      </Dashboard>
    );
  }
}

export default Profile;
