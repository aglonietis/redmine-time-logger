import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Container, Header, Segment} from 'semantic-ui-react';
import {setAccountAuth} from '../../actions/account';
import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';
import './App.css';

class App extends Component {
    onSettings = (e) => {
        e.preventDefault();
        chrome.runtime.openOptionsPage && chrome.runtime.openOptionsPage();
    }

    render() {
        const {authenticated} = this.props;
        const View = authenticated ? Authenticated : Unauthenticated;
        return (
            <div className='App'>
                <Header as='h3' attached='top' textAlign='center' color='red'>
                    {process.env.REACT_APP_APP_NAME}
                    <Button floated='right' className='Background-white' circular icon='cog' onClick={this.onSettings}/>
                </Header>
                <div className='App-view'>
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

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
