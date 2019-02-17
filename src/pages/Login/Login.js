import React from 'react';
import Helmet from 'react-helmet';
import { Heading, Card, TextInputField, Text, Button, Alert } from 'evergreen-ui';
import { Link, Redirect } from 'react-router-dom';
import Box from 'ui-box';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Beauty from '../../containers/Beauty';
import './Login.scss';
import authService from '../../services/authentication';
import Auth from '../../containers/Auth';

const validateUsername = function validateEmail(value) {
  return yup.string().min(6).isValidSync(value) ? '' : 'Username must be at least 6 characters';
}

const validatePassword = function validateEmail(value) {
  return yup.string().min(6).isValidSync(value) ? '' : 'Password must be at least 6 characters';
}

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { error: false, success: false };
  }

  async onSubmit(values, formik) {
    console.log(values);
    try {
      this.setState({ error: false, success: false });
      const user = await authService.login(values.username, values.password);
      this.setState({ success: 'Logged in successfully' });
      setTimeout(() => {
        authService.setCurrent(user);
        this.props.history.push('/home');
      }, 1000);
    } catch (error) {
      console.error(error);
      this.setState({ error: error.message });
    }
    formik.setSubmitting(false);
  }

  render() {
    return (
      <Beauty>
        <Auth auth={() => <Redirect to="/"/>}/>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div className="register">
          <Heading size={900} color="#FFFFFF">Login</Heading>
          <Card
              marginTop={24}
              padding={24}
              textAlign="left"
              background="tint1">
            <Formik
                initialValues={{ username: 'abcdef', password: '123213' }}
                onSubmit={this.onSubmit}>
              {({ isSubmitting }) => (
                <Form>
                  <ErrorMessage name="username" render={error => (
                    <Alert intent="warning" title={error}></Alert>
                  )}/>
                  <Field name="username" validate={validateUsername} render={({ field }) => (
                    <TextInputField {...field} label="Username"/>
                  )}/>
                  <ErrorMessage name="password" render={error => (
                    <Alert intent="warning" title={error}></Alert>
                  )}/>
                  <Field name="password" validate={validatePassword} render={({ field }) => (
                    <TextInputField {...field} label="Password" type="password"/>
                  )}/>
                  {this.state.success && (
                    <Alert intent="success" title={this.state.success} marginBottom={16}/>
                  )}
                  {this.state.error && (
                    <Alert intent="danger" title={this.state.error} marginBottom={16}/>
                  )}
                  <Box textAlign="center">
                    <Button appearance="primary" type="submit" isLoading={isSubmitting} marginRight={8}>Login</Button>
                    <Button appearance="minimal" type="button" onClick={() => this.props.history.push('/forgot-password')}>Forgot password?</Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Card>
          <Box textAlign="center" marginTop={16}>
            <Text>Or</Text> <Link to="/register"><Text>register</Text></Link> <Text>an account</Text>
          </Box>
        </div>
      </Beauty>
    );
  }
}

export default Login;
