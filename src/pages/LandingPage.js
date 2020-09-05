import React, { Component } from 'react';
import Headers from 'parts/Headers';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';

import landingPage from 'json/landingPage.json';

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Headers {...this.props}></Headers>
                <Hero data={landingPage.hero} />
                <MostPicked data={landingPage.mostPicked} />
            </>
        );
    }
}

