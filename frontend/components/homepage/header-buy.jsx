import React, { Component } from 'react';

class HeaderBuySell extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showList: false
		};
		this.buyOrSell = this.buyOrSell.bind(this);
		this.clickLink = this.clickLink.bind(this);
		this.showList = this.showList.bind(this);
	}

	clickLink(route) {
		return (e) => {
			this.props.router.push(route);
		};
	}

	buyOrSell() {
		if ( this.props.buy ) {
			return (
				"Buy ▾"
			);
		} else {
			return (
				"Sell ▾"
			);
		}
	}

	showList() {
		if (this.props.buy) {
			return (
				<div className="why-buy-list list">
					<ul>
						<li>
							<a onClick={this.clickLink('why-buy')}>Buy with Redfin</a>
						</li>
						<li>
							<a onClick={this.clickLink('how-much-house-can-i-afford')}>
								Affordability Calculator
							</a>
						</li>
						<li>
							<a onClick={this.clickLink('home-buying-guide')}>
								Home Buying Guide
							</a>
						</li>
						<li>
							<a onClick={this.clickLink('buy-a-home/openbook')}>
								Find Lenders & Inspectors
							</a>
						</li>
						<li>
							<a onClick={this.clickLink('buy-a-home/classes-and-events')}>
								Classes & Events
							</a>
						</li>
					</ul>
					<div className="arrow"></div>
				</div>
			);
		} else if (!this.props.buy) {
			return (
				<div className="why-sell-list list">
					<ul>
						<li>
							<a onClick={this.clickLink('why-sell')}>Sell with Redfin</a>
						</li>
						<li>
							<a onClick={this.clickLink('what-is-my-house-worth')}>
								What is my home worth
							</a>
						</li>
						<li>
							<a onClick={this.clickLink('sell-a-home/will-selling-pay-off')}>
								Home Buying Guide
							</a>
						</li>
						<li>
							<a onClick={this.clickLink('sell-a-home/home-selling-guide')}>
								Home Selling Guide
							</a>
						</li>
						<li>
							<a onClick={this.clickLink('sell-a-home/find-handy-people')}>
								Find Handypeople & Stagers
							</a>
						</li>
					</ul>
					<div className="arrow"></div>
				</div>
			);
		}
	}

	render() {
		return (
			<div className={ this.props.buy ?
					"buy redfin-menu-item" :
					"sell redfin-menu-item"
				}
				onMouseEnter={() => this.setState({["showList"]: true})}
				onMouseLeave={() => this.setState({["showList"]: false})}
				>
				{this.buyOrSell()}
				{this.showList()}
			</div>
		);
	}
}
export default HeaderBuySell;
