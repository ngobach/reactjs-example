import React from 'react';
import Box from 'ui-box';
import Beauty from '../Beauty';
import Navigator from '../../components/Navigator';

class Dashboard extends React.Component {
  render() {
    return (
      <Beauty>
        <Navigator />
        <Box flex={1}>
          {this.props.children}
        </Box>
      </Beauty>
    );
  }
}

export default Dashboard;
