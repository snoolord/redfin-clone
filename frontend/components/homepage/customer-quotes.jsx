import React, { Component } from 'react';
import Slider from 'react-slick';

class CustomerQuotes extends Component {
    render() {
        let settings = {
            dots: true,
        };
        return (
            <div className='container'>
                <Slider {...settings}>
                    <div><img src='http://placekitten.com/g/400/200' /></div>
                    <div><img src='http://placekitten.com/g/400/200' /></div>
                    <div><img src='http://placekitten.com/g/400/200' /></div>
                    <div><img src='http://placekitten.com/g/400/200' /></div>
                </Slider>
            </div>
        );
    }
}

export default CustomerQuotes;
