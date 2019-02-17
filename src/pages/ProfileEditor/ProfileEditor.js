import React from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Pane, Alert, Heading, Switch, Button, TextInput, Select } from 'evergreen-ui';
import { Formik, Form, Field } from 'formik';
import Box from 'ui-box';
import Dashboard from '../../containers/Dashboard';
import Auth from '../../containers/Auth';
import authService from '../../services/authentication';
import userService from '../../services/user';
import utils from '../../services/utils';
import './ProfileEditor.scss';

class ProfileEditor extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { success: false, error: false };
  }

  async onSubmit(values, formik) {
    try {
      this.setState({ success: false, error: false });
      await utils.delay(1000);
      await userService.update(authService.current.username, values);
      await authService.setCurrent(values);
      this.setState({ success: 'Account profile has been updated' });
    } catch (error) {
      console.error(error);
      this.setState({ error: error.message });
    }
    formik.setSubmitting(false);
  }

  render() {
    return (
      <Dashboard>
        <Helmet>
          <title>Edit my profile</title>
        </Helmet>
        <Auth guest={() => <Redirect to="/"/>} auth={user => (
          <Box className="profile">
            <Pane width="100%" background="tint2" border="muted" marginTop={32} padding={64} elevation={1}>
              <Heading size={600}>Edit My Profile</Heading>
              <Formik initialValues={{...user}} onSubmit={this.onSubmit}>
                {({ isSubmitting }) => (
                  <Form>
                  <Box display="flex" marginY={16}>
                    <Box flex="1">
                      <Heading size={100}>Username</Heading>
                      <Field name="username" render={({ field }) => (
                        <TextInput {...field} height={24} width="80%"/>
                      )}/>
                    </Box>
                    <Box flex="1">
                      <Heading size={100}>Full Name</Heading>
                      <Field name="fullname" render={({ field }) => (
                        <TextInput {...field} height={24} width="80%"/>
                      )}/>
                    </Box>
                  </Box>
                  <Box display="flex" marginY={16}>
                    <Box flex="1">
                      <Heading size={100}>Email</Heading>
                      <Field name="email" render={({ field }) => (
                        <TextInput {...field} height={24} width="80%"/>
                      )}/>
                    </Box>
                    <Box flex="1">
                      <Heading size={100}>Country</Heading>
                      <Field name="country" render={({ field }) => (
                        <Select {...field} height={24} width="80%">
                          <option value="VN">Viet Nam</option>
                          <option value="JP">Japan</option>
                          <option value="US">USA</option>
                        </Select>
                      )}/>
                    </Box>
                  </Box>
                  <Box display="flex" marginY={16}>
                    <Box flex="1">
                      <Heading size={100}>Website</Heading>
                      <Field name="homepage" render={({ field }) => (
                        <TextInput {...field} height={24} width="80%"/>
                      )}/>
                    </Box>
                    <Box flex="1">
                      <Heading size={100}>Receive notifications</Heading>
                      <Field name="notifyMe" render={({ field }) => (
                        <Switch {...field} value={null} checked={field.value} height={20} marginTop={2}/>
                      )}/>
                    </Box>
                  </Box>
                  
                  {this.state.success && (
                    <Alert intent="success" title={this.state.success} marginBottom={16}/>
                  )}

                  {!this.state.success && (
                    <Box>
                      <Button type="submit" appearance="primary" isLoading={isSubmitting} marginRight={8}>Save</Button>
                      <Button type="button" appearance="minimal" marginRight={8} onClick={() => this.props.history.push('/profile')}>Cancel</Button>
                    </Box>
                  )}

                  {this.state.success && (
                    <Box>
                      <Button type="button" appearance="primary" marginRight={8} onClick={() => this.props.history.push('/profile')}>Back</Button>
                    </Box>
                  )}
                </Form>
                )}
              </Formik>
            </Pane>
          </Box>
        )}/>
      </Dashboard>
    );
  }
}

export default ProfileEditor;
