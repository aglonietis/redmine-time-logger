import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import {
  accountAuth, accountProfile, accountLogout
} from '../../actions/account';
import Authed from './Authed';
import Unauthed from './Unauthed';
import './App.css';

class App extends Component {
  render() {
    const { token } = this.props;
    const View = token? Authed : Unauthed;
    return (
        <div className='App'>
          <Header as='h3' attached='top' textAlign='center' inverted color='teal'>
            Keyword Marker!
          </Header>
          <div className='App-view'>
            <View {...this.props}/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => Object.assign(
    {}, state.account, state.marker
);

const mapDispatchToProps = dispatch => ({
  accountAuth: data => {
    dispatch(accountAuth(data));
  },
  accountProfile: data => {
    dispatch(accountProfile(data));
  },
  accountLogout: () => {
    dispatch(accountLogout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
