import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Container, Header, Segment} from 'semantic-ui-react';
import {accountAuth} from '../../actions/account';
import Authed from './Authed';
import Unauthed from './Unauthed';
import './App.css';

class App extends Component {
    onSettings = (e) => {
        e.preventDefault();
        chrome.runtime.openOptionsPage && chrome.runtime.openOptionsPage();
    }

    render() {
        const {appName, authenticated} = this.props;
        const View = authenticated ? Authed : Unauthed;
        return (
            <div className='App'>
                <Header as='h3' attached='top' textAlign='center' inverted color='teal'>
                    {appName}
                </Header>
                <div className='App-view'>
                    <Container textAlign='center'>
                        <Button floated='rights' circular icon='cog' onClick={this.onSettings}/>
                    </Container>

                    <Segment textAlign='center'>
                        <View {...this.props}/>
                    </Segment>
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
