import React, {Component} from 'react';
import {Header, Icon, Label, Placeholder} from 'semantic-ui-react';

export default class Authenticated extends Component {
    onSettings = (e) => {
        e.preventDefault();
        chrome.runtime.openOptionsPage && chrome.runtime.openOptionsPage();
    }

    onLogout = (e) => {
        e.preventDefault();
        const {accountLogout} = this.props;
        accountLogout();
    }

    onCheck = (e, {checked}) => {
        e.preventDefault();
        const {setEnabled, setStats} = this.props;
        setEnabled(checked);
        !checked && setStats(false);
    }

    render() {
        const {name, keywords, enabled, stats,apiUrl} = this.props;
        return (
            <div>
                {!name && !keywords &&
                <Placeholder fluid>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                </Placeholder>
                }

                {name &&
                <Header as='h4'>
                    <Icon name='user'/>{name}
                </Header>
                }

                {keywords && keywords.map((v, i) =>
                    <Label color='red' tag>
                        {v}
                        {stats &&
                        <Label.Detail>{stats[i]}</Label.Detail>
                        }
                    </Label>
                )}
            </div>
        );
    }
}
