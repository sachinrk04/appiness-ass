import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './pages/Login';
import EmpList from './pages/EmpList';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isAuthenticated: true
  //   }
  // }


  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/**" component={Login} />
      </Switch>
    )

    if (this.props.isAuth) {
      routes = (
        <Switch>
            <Route path="/" exact component={EmpList} />
        </Switch>
      );
    }
    return (
      <Fragment>
        {routes}
      </Fragment>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth
  }
};

export default connect(mapStateToProps)(App);
