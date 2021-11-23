import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Loader, Button, Divider, Form, Image, Input, Segment} from 'semantic-ui-react';
import {setApiKey, setApiUrl} from '../../actions/settings';
import './App.css';
import {CheckAuthentication} from '../../api/redmine/api';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testLoading: false
        };
    }

    changeApiUrl = (e) => {
        this.props.setApiUrl(e.target.value);
    }

    changeApiKey = (e) => {
        this.props.setApiKey(e.target.value);
    }

    testApiConnection = (e) => {
        this.setState({
            testLoading: true
        });

        CheckAuthentication()
            .then( response => {
                this.setState({
                    testLoading: false
                });

                console.log(response);
            });
    }

    render() {
        const {apiUrl, apiKey} = this.props;
        return (
            <div className='App'>
                <div>
                    <Image src='icon.png' size='small' bordered/>
                    <h2>{process.env.REACT_APP_APP_NAME}</h2>
                </div>

                <Form>
                    <Divider/>
                    <Form.Group inline>
                        <Form.Field width={4}>
                            <label>Redmine URL</label>
                        </Form.Field>
                        <Form.Field width={12}>
                            <Input name='apiUrl' type="text" placeholder="https://redmine.example.com" value={apiUrl}
                                   onChange={this.changeApiUrl}/>
                        </Form.Field>
                    </Form.Group>
                    <Divider/>
                    <Form.Group inline>
                        <Form.Field width={4}>
                            <label>Redmine API key</label>
                        </Form.Field>
                        <Form.Field width={12}>
                            <Input name='apiKey' type="password" placeholder="Enter API Key here..." value={apiKey}
                                   onChange={this.changeApiKey}/>
                        </Form.Field>
                    </Form.Group>
                </Form>
                <Button onClick={this.testApiConnection}>
                    Test Connection
                </Button>
                <div>
                    <Loader active={this.state.testLoading} />
                    <Divider hidden />
                    <div>
                        <h2>User Info</h2>
                    </div>
                    <Form>
                        <Divider/>
                        <Form.Group inline>
                            <Form.Field width={4}>
                                <label>Redmine URL</label>
                            </Form.Field>
                            <Form.Field width={12}>
                                <label>Redmine URL</label>
                            </Form.Field>
                        </Form.Group>
                        <Divider/>
                        <Form.Group inline>
                            <Form.Field width={4}>
                                <label>Redmine API key</label>
                            </Form.Field>
                            <Form.Field width={12}>
                                <label>Redmine API key</label>
                            </Form.Field>
                        </Form.Group>
                    </Form>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => state.settings;

const mapDispatchToProps = dispatch => ({
    setApiUrl: data => {
        dispatch(setApiUrl(data));
    },
    setApiKey: data => {
        dispatch(setApiKey(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
