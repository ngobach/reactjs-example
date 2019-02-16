import React from 'react';
import Helmet from 'react-helmet';
import Box from 'ui-box';
import { Heading, Icon, Text } from 'evergreen-ui';
// import './NotFound.scss';
import Beauty from '../../containers/Beauty';

class NotFound extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = null;
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    this.ref = setTimeout(this.redirect, 3000);
  }

  componentWillUnmount() {
    if (this.ref !== null) {
      clearTimeout(this.ref);
      this.ref = null;
    }
  }

  redirect() {
    this.props.history.push('/');
  }

  render() {
    return (
      <Beauty>
        <Helmet>
          <title>Page not found</title>
        </Helmet>
        <Icon icon="error" color="#FFFFFF" size={64}/>
        <Box height={16} />
        <Heading size={700} color="#FFFFFF" marginBottom={16}>This page is not found or unavailable</Heading>
        <Text color="#FFFFFF">Redirecting you to homepage</Text>
      </Beauty>
    );
  }
}

export default NotFound;
