import React from 'react';
import Helmet from 'react-helmet';
import { Heading, Card, TextInputField, Text, Button, Alert } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import Box from 'ui-box';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Beauty from '../../containers/Beauty';
import './Register.scss';
import authService from '../../services/authentication';

const validateUsername = function validateEmail(value) {
  return yup.string().min(6).isValidSync(value) ? '' : 'Username must be at least 6 characters';
}

const validatePassword = function validateEmail(value) {
  return yup.string().min(6).isValidSync(value) ? '' : 'Password must be at least 6 characters';
}

const validateEmail = function validateEmail(value) {
  return yup.string().min(1).email().isValidSync(value) ? '' : `${value} is not a valid email address`;
}

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { error: false, success: false };
  }

  async onSubmit(values, formik) {
    try {
      this.setState({ error: false, success: false });
      await authService.register(values);
      this.setState({ success: true });
    } catch (error) {
      console.error(error);
      this.setState({ error: error.message });
    }
    formik.setSubmitting(false);
  }

  render() {
    return (
      <Beauty>
        <Helmet>
          <title>Register</title>
        </Helmet>
        <div className="register">
          <Heading size={900} color="#FFFFFF">Register</Heading>
          <Card
              marginTop="24px"
              padding="24px"
              textAlign="left"
              background="tint1">
            <Formik
                initialValues={{ username: 'abcdef', email: 'abcdef@gmail.co', password: '123213' }}
                onSubmit={this.onSubmit}>
              {({ isSubmitting }) => (
                <Form>
                  <ErrorMessage name="username" render={error => (
                    <Alert intent="warning" title={error}></Alert>
                  )}/>
                  <Field name="username" validate={validateUsername} render={({ field }) => (
                    <TextInputField {...field} label="Username"/>
                  )}/>
                  <ErrorMessage name="email" render={error => (
                    <Alert intent="warning" title={error}></Alert>
                  )}/>
                  <Field name="email" validate={validateEmail} render={({ field }) => (
                    <TextInputField {...field} label="Email"/>
                  )}/>
                  <ErrorMessage name="password" render={error => (
                    <Alert intent="warning" title={error}></Alert>
                  )}/>
                  <Field name="password" validate={validatePassword} render={({ field }) => (
                    <TextInputField {...field} label="Password" type="password"/>
                  )}/>
                  {this.state.success && (
                    <Alert intent="success" title="Your account has been created" marginBottom={16}/>
                  )}
                  {this.state.error && (
                    <Alert intent="danger" title={this.state.error} marginBottom={16}/>
                  )}
                  <Box textAlign="center">
                    <Button appearance="primary" type="submit" isLoading={isSubmitting}>Register</Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Card>
          <Box textAlign="center" marginTop={16}>
            <Text>Or</Text> <Link to="/login"><Text>login</Text></Link> <Text>if you already had an account</Text>
          </Box>
        </div>
      </Beauty>
    );
  }
}

export default Register;
