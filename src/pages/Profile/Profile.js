import React from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Dashboard from '../../containers/Dashboard';
import Auth from '../../containers/Auth';

class Profile extends React.Component {
  render() {
    return (
      <Dashboard>
        <Auth guest={() => <Redirect to="/"/>}/>
        <Helmet>
          <title>My profile</title>
        </Helmet>
        Ahihi do ngok
      </Dashboard>
    );
  }
}

export default Profile;
