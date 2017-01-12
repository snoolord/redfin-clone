import React, { Component } from 'react';

class CustomerQuotes extends Component {
    constructor(props) {
        super(props);
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

    render() {
        let slides = this.createSlides(5);
        console.log(slides);
        return (
            <div className="customer-quotes">
                {slides.map((slide) => {
                    return this.img(slide);
                })}
            </div>
        );
    }
}

export default CustomerQuotes;
