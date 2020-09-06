import React, { Component } from 'react';
import Headers from 'parts/Headers';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';

import landingPage from 'json/landingPage.json';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    }
    render() {
        return (
            <>
                <Headers {...this.props}></Headers>
                <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
                <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
            </>
        );
    }
}

