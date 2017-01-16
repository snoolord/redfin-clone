import React, { Component } from 'react';

class CustomerQuotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currSlide: 1
        };
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.slideReel = this.slideReel.bind(this);
        this.adjustCurrSlide = this.adjustCurrSlide.bind(this);
    }

    img(url) {
        return (
            <img className src={url}></img>
        );
    }

    placeholdIt(slideNum) {
        return `http://placehold.it/400x300/?text=${slideNum}`;
    }

    createSlides(num) {
        let slides = [];

        for (let i = 1; i <= num; i++) {
            let imgUrl = this.placeholdIt(i);
            slides.push(imgUrl);
        }
        return slides;
    }

    prevSlide() {
        this.setState({["currSlide"]: this.state.currSlide-1}, this.adjustCurrSlide);
    }

    nextSlide() {
        this.setState({["currSlide"]: this.state.currSlide + 1}, this.adjustCurrSlide);
    }

    slideReel(slides) {
        slides = slides.slice(this.state.currSlide - 1
            , this.state.currSlide + 2);
    }

    adjustCurrSlide() {
        if (this.state.currSlide === 0) {
            this.setState({["currSlide"]: 5});
        }
        if (this.state.currSlide === 6) {
            this.setState({["currSlide"]: 1});
        }
    }

    render() {
        let slides = this.createSlides(5);
        slides.push(slides[0]);
        slides.unshift(slides[slides.length-2]);
        this.adjustCurrSlide();
        return (
            <div className="customer-quotes">
                <button className="carousel-left-button" onClick={this.prevSlide}>
                    <svg width="60px" height="80px" viewBox="0 0 50 80">
                        <polyline fill="none" stroke="#808080" stroke-width="1"
                             stroke-linecap="round" stroke-linejoin="round" points="
                            45.63,75.8 0.375,38.087 45.63,0.375 "/>
                    </svg>
                </button>
                {this.img(slides[this.state.currSlide])}
                <button className="carousel-right-button" onClick={this.nextSlide}>
                    <svg width="60px" height="80px" viewBox="0 0 50 80">
                        <polyline fill="none" stroke="#808080" stroke-width="1"
                            stroke-linecap="round" stroke-linejoin="round" points="
                            0.375,0.375 45.63,38.087 0.375,75.8 "/>
                    </svg>
                </button>
            </div>
        );
    }
}

export default CustomerQuotes;
