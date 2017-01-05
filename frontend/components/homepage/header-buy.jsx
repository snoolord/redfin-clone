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
				<div className="why-redfin-responsive-buy"
					>Buy ▾
					<div className="fly-out">
						{this.showList()}
					</div>
				</div>
			);
		} else {
			return (
				<div className="why-redfin-responsive-sell"
					>Sell ▾
					<div className="fly-out">
						{this.showList()}
					</div>
				</div>
			);
		}
	}

	showList() {
		if (this.state.showList && this.props.buy) {
			return (
				<ul className="why-buy-list">
					<li>
						<ul>
							<a onClick={this.clickLink('why-buy')}>Buy with Redfin</a>
						</ul>
						<ul>
							<a onClick={this.clickLink('how-much-house-can-i-afford')}>
								Affordability Calculator
							</a>
						</ul>
						<ul>
							<a onClick={this.clickLink('home-buying-guide')}>
								Home Buying Guide
							</a>
						</ul>
						<ul>
							<a onClick={this.clickLink('buy-a-home/openbook')}>
								Find Lenders & Inspectors
							</a>
						</ul>
						<ul>
							<a onClick={this.clickLink('buy-a-home/classes-and-events')}>
								Classes & Events
							</a>
						</ul>
					</li>
				</ul>
			);
		} else if (this.state.showList && !this.props.buy) {
			return (
				<ul className="why-sell-list">
					<li>
						<ul>
							<a onClick={this.clickLink('why-sell')}>Sell with Redfin</a>
						</ul>
						<ul>
							<a onClick={this.clickLink('what-is-my-house-worth')}>
								What is my home worth
							</a>
						</ul>
						<ul>
							<a onClick={this.clickLink('sell-a-home/will-selling-pay-off')}>
								Home Buying Guide
							</a>
						</ul>
						<ul>
							<a onClick={this.clickLink('sell-a-home/home-selling-guide')}>
								Home Selling Guide
							</a>
						</ul>
						<ul>
							<a onClick={this.clickLink('sell-a-home/find-handy-people')}>
								Find Handypeople & Stagers
							</a>
						</ul>
					</li>
				</ul>
			);
		} else {
			return (
				<div></div>
			);
		}
	}

	render() {
		return (
			<div className="redfin-menu-item"
				onMouseEnter={() => this.setState({["showList"]: true})}
				onMouseLeave={() => this.setState({["showList"]: false})}

				>
				{this.buyOrSell()}
			</div>
		);
	}
}
export default HeaderBuySell;
