import React, { Component } from 'react';

class CustomerQuotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currSlide: 1
        };
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    img(url) {
        return (
            <img src={url}></img>
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
        if (this.state.currSlide === 0) {
            // if we're on the "buffer" part of the array"
            // we're going to want to set set the currSlide to the biggest slide -1
            this.setState({["currSlide"]: 4});
        } else {
            this.setState({["currSlide"]: this.state.currSlide-1});
        }

    }
    nextSlide() {
        if ( this.state.currSlide === 6) {
            this.setState({["currSlide"]: 1});
        } else {
            this.setState({["currSlide"]: this.state.currSlide + 1});
        }
    }

    render() {
        let slides = this.createSlides(5);
        slides.push(slides[0]);
        slides.unshift(slides[slides.length-2]);

        return (
            <div className="customer-quotes">
                <button className="carousel-left-button" onClick={this.prevSlide}>
                    <svg width="60px" height="80px" viewBox="0 0 50 80">
                        <polyline fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                            45.63,75.8 0.375,38.087 45.63,0.375 "/>
                    </svg>
                </button>
                {this.img(slides[this.state.currSlide])}
                <button className="carousel-right-button" onClick={this.nextSlide}>
                    <svg width="60px" height="80px" viewBox="0 0 50 80">
                        <polyline fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
                            0.375,0.375 45.63,38.087 0.375,75.8 "/>
                    </svg>
                </button>
            </div>
        );
    }
}

export default CustomerQuotes;
