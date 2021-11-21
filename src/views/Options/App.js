import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Input, Form, Button, Divider } from 'semantic-ui-react';
import {
  setApiUrl, setApiKey
} from '../../actions/settings';
import './App.css';

class App extends Component {

  changeApiUrl = (e) => {
    this.props.setApiUrl(e.target.value);
  }

  changeApiKey = (e) => {
    this.props.setApiKey(e.target.value);
  }

  testApiConnection = (e) => {
    alert('testing');
  }

  render() {
    const { appName, apiUrl, apiKey} = this.props;
    return (
        <div className='App'>
          <div>
            <Image src='icon.png' size='small' bordered />
            <h2>{appName}</h2>
          </div>
          <Form>
            <Divider/>
            <Form.Group inline>
              <Form.Field width={4}>
                <label>Redmine URL</label>
              </Form.Field>
              <Form.Field width={12}>
                <Input name='apiUrl'  type="text" placeholder="https://redmine.example.com" value={apiUrl} onChange={this.changeApiUrl}/>
              </Form.Field>
            </Form.Group>
            <Divider/>
            <Form.Group inline>
              <Form.Field width={4}>
                <label>Redmine API key</label>
              </Form.Field>
              <Form.Field width={12}>
                <Input name='apiKey'  type="password" placeholder="Enter API Key here..." value={apiKey} onChange={this.changeApiKey}/>
              </Form.Field>
            </Form.Group>
          </Form>
          <Button onClick={this.testApiConnection}>Test Connection</Button>
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
