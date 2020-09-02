import React, { Component } from 'react';
import Headers from 'parts/Headers';

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Headers {...this.props}></Headers>
            </>
        );
    }
}

