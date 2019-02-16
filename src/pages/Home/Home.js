import React from 'react';
import { Heading, Button } from 'evergreen-ui';
import './Home.scss';
import Beauty from '../../containers/Beauty';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.doRegister = this.doRegister.bind(this);
    this.doLogin = this.doLogin.bind(this);
  }

  doRegister() {
    this.props.history.push('/register');
  }

  doLogin() {
    this.props.history.push('/login');
  }

  render() {
    return (
      <Beauty>
        <div className="home">
          <Heading size={900}>Example React Project</Heading>
          <Heading marginTop="1em" marginBottom="1em">What should we do next?</Heading>
          <Button marginRight={12} appearance="primary" intent="success" onClick={this.doRegister}>Register</Button>
          <Button appearance="primary" onClick={this.doLogin}>Login</Button>
        </div>
      </Beauty>
    );
  }
}

export default Home;
