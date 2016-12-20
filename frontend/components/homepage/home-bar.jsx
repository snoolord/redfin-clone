import React, { Component } from 'react';
import Header from './header';
import { withRouter } from 'react-router';
import HomeBarLeft from './home-bar-left';
import MarketingSectionOne from './marketing-section-one';

class HomeBar extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="home-page">
            <div id="home-bar" className="clearfix">
               <Header/>
               <HomeBarLeft/>
            </div>
            <MarketingSectionOne />   
         </div>
      );
   }
}

export default withRouter(HomeBar);
