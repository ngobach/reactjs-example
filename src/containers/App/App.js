import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TextPage from '../../components/TextPage';
import Home from '../../pages/Home';
import Register from '../../pages/Register';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';

const UserProfile = () => <TextPage>User Profile</TextPage>;

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Redirect from="/" to="/home" exact/>
        <Route path="/home" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/profile" component={UserProfile}/>
        <Route component={NotFound}/>
      </Switch>
    );
  }
}

export default App;
