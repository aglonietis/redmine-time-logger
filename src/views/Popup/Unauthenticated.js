import React, {Component} from 'react';

export default class Unauthenticated extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {apiUrl} = this.props;

        return (
            <div>
                <label>{apiUrl} Your configuration has incomplete! Please visit options and finish configuration!</label>
            </div>
        );
    }
}
