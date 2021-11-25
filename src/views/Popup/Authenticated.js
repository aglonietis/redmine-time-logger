import React, {Component} from 'react';
import {Header, Icon, Label, Placeholder} from 'semantic-ui-react';

export default class Authenticated extends Component {
    render() {
        const {firstName, lastName} = this.props;
        return (
            <div>
                <Header as='h4'>
                    <Icon name='user'/>{firstName} {lastName}
                </Header>
            </div>
        );
    }
}
