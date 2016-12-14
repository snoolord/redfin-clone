import React, { Component } from 'react';
import { withRouter } from 'react-router';

class HomeBarLeft extends Component {
   constructor(props) {
      super(props);
      this.state = {
         select: 'find-a-home'
      };
   }

   classSet(cls) {
      if (this.state.select === cls) {
         return `title ${cls} active`;
      } else {
         return `title ${cls}`;
      }
   }

   upperTabContent() {
      if (this.state.select === 'find-a-home') {
         return (
            <div className="input-box">
               <input id="search-box-input" className="search-box-input" placeholder="City, Address, School, Agent, ZIP"/>
               <button className="search-button">
                  <i className="fa fa-search fa-lg" aria-hidden="true"></i>
               </button>
            </div>
         );
      } else if ( this.state.select === 'sell-my-home') {
         return (
            <div className="seller-consultant-address">
               <h2 className="title">Request a free consultation on your home's value</h2>
               <div  className="address-info-container">
                  <div className="address-container">
                     <span className="address-container-text">
                        Street Address
                     </span>
                     <input id="address-input-box" className="address-input-box" placeholder="Enter Your Street Address"></input>
                  </div>
                  <div className="zip-code-container">
                     <span className="zip-container-text">
                        ZIP Code
                     </span>
                     <input id="zip-code-input-box" className="address-input"></input>
                  </div>
               </div>
            </div>
         );
      } else {
         return (
            <div className="home-estimate">
               <input id="search-box-input" className="search-box-input" placeholder="Enter your street address"/>
               <button className="search-button">
                  <i className="fa fa-search" aria-hidden="true"></i>
               </button>
            </div>
         );

      }
   }
   lowerTabContent() {
      if (this.state.select === 'find-a-home') {
         return (
            <div className="find-a-home-lower">
               <h2 className="find-a-home-lower-text">
                  <strong>Get Better Results when selling</strong>
                  <br/>
                  Redfin Agents sell homes for $4,300 more
                  <br/>
                  and charge only a 1.5% listing fee
               </h2>
               <button className="why-sell">Learn More</button>
            </div>
         );
      } else if ( this.state.select === 'sell-my-home') {
         return (
            <div className="sell-my-home-lower">
               <button className="sell-my-home-button">Next</button>
            </div>
         );
      } else {
         return (
            <div className="find-ahome-lower-text">
               <h2 className="find-a-home-lower-text">
                  <strong>Introducing the Redfin Estimate</strong>
                  <br/>
                  The lowest published error rate
                  <br/>
                  of any home-value estimate
               </h2>
               <button className="home-estimate-button">Learn More</button>
            </div>
         );
      }
   }

   render() {
      return (
         <div id="home-bar-left">
            <h1 className="brand-text">
               Sell your home for more, <br/>
            pay 1.5% commission
         </h1>
         <div className="homepage-tab-container">
            <div className="tabs">
                  <h2 className={this.classSet('find-a-home')} onClick={() => this.setState({['select']: 'find-a-home'})}>Find a Home</h2>
                  <h2 className={this.classSet('sell-my-home')} onClick={() => this.setState({['select']: 'sell-my-home'})}>Sell My Home</h2>
                  <h2 className={this.classSet('see-home-estimate')} onClick={() => this.setState({['select']: 'see-home-estimate'})}>See Home Estimate</h2>
            </div>
            <div className="tab-contents">
               {this.upperTabContent()}
               {this.lowerTabContent()}
            </div>
         </div>
      </div>
   );
}
}

export default HomeBarLeft;
