import React, {Component} from 'react';

export default class Unauthenticated extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>Your configuration has incomplete! Please visit options and finish configuration!</label>
            </div>
        );
    }
}
