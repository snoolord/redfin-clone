import React, { Component } from 'react';
import WhatIsRedfin from './what-is-redfin';
import CustomerQuotes from './customer-quotes';

class MarketingSections extends Component {
    render() {
        return (
            <div className="marketing-sections">
                <WhatIsRedfin/>
                <CustomerQuotes/>
            </div>
        );
    }
}

export default MarketingSections;
