import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Input, Form, Button, Divider } from 'semantic-ui-react';
import {
  setMatchWhole, setMatchCase,
  setColor, setColorBg, setBold, setUnderline
} from '../../actions/settings';
import './App.css';

class App extends Component {
  onCheck = (e, { name, checked }) => {
    const {setMatchWhole, setMatchCase} = this.props;
    const map = {matchWhole: setMatchWhole, matchCase: setMatchCase};
    map[name] && map[name](checked);
  }

  onToggle = (e, { name }) => {
    const {bold, underline, setBold, setUnderline} = this.props;
    const map = {bold: setBold, underline: setUnderline};
    const mapVals = {bold, underline};
    map[name] && map[name](!mapVals[name]);
  }

  onColor = (e) => {
    const {name, value} = e.target;
    const {setColor, setColorBg} = this.props;
    const map = {color: setColor, colorBg: setColorBg};
    name && map[name] && map[name](value);
  }

  render() {
    const { appName, matchCase, color, colorBg, bold, underline } = this.props;
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
                <Input name='api-url'  type="text" placeholder="https://redmine.example.com"/>
              </Form.Field>
            </Form.Group>
            <Divider/>
            <Form.Group inline>
              <Form.Field width={4}>
                <label>Redmine API key</label>
              </Form.Field>
              <Form.Field width={12}>
                <Input name='api-token'  type="password" placeholder="Enter API Key here..."/>
              </Form.Field>
            </Form.Group>
            <Divider/>
            <Form.Group inline>
              <Button positive>Save</Button>
              <Button>Cancel</Button>
            </Form.Group>
          </Form>
        </div>
    );
  }
}

const mapStateToProps = state => state.settings;

const mapDispatchToProps = dispatch => ({
  setMatchWhole: data => {
    dispatch(setMatchWhole(data));
  },
  setMatchCase: data => {
    dispatch(setMatchCase(data));
  },
  setColor: data => {
    dispatch(setColor(data));
  },
  setColorBg: data => {
    dispatch(setColorBg(data));
  },
  setBold: data => {
    dispatch(setBold(data));
  },
  setUnderline: data => {
    dispatch(setUnderline(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
