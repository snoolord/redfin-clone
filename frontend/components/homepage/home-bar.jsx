import React, { Component } from 'react';
import Header from './header';
import { withRouter } from 'react-router';

class HomeBar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id="home-bar" className="clearfix">
        <Header/>
      </div>
    );
  }
}

export default withRouter(HomeBar);
