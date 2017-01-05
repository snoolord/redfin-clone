import React, { Component } from 'react';
class HeaderBuySell extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showList: false
		};
		this.buyOrSell = this.buyOrSell.bind(this);
		this.clickLink = this.clickLink.bind(this);
	}

	clickLink(route) {
		return (e) => {
			this.props.router.push(route);
		};
	}

	buyOrSell() {
		if (this.props.buy === true) {
			return (
				<div className="why-redfin-responsive-buy"
					onClick={this.clickLink('why-buy')}
					onMouseEnter={() => this.setState({["showList"]: true})}
					onMouseLeave={() => this.setState({["showList"]: false})}
					>Buy ▾
				</div>
			);
		} else {
			return (
				<div className="why-redfin-responsive-sell"
					onClick={this.clickLink('why-sell')}
					>Sell ▾
				</div>
			);
		}
	}
	render() {
		return (
			<div className="redfin-menu-item">
				{this.buyOrSell()}
			</div>
		);
	}
}
export default HeaderBuySell;
