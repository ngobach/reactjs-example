import React from 'react';
import { Heading, Button } from 'evergreen-ui';
// import './NotFound.scss';
import Beauty from '../../containers/Beauty';

class NotFound extends React.PureComponent {
  render() {
    return (
      <Beauty>
        <Heading size={900}>This page is unavailable</Heading>
      </Beauty>
    );
  }
}

export default NotFound;
