import { Router,
    Route,
    Link,
    IndexRoute,
    IndexLink,
    hashHistory } from 'react-router';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel2';


const options = {
    items: 1,
    rewind: true,
    autoplay: true,
    nav: true,
    dots: true,
    center: true,
    navText: ["<" , ">"],


};

class Carousel extends React.Component {
        render() {
            return (<div className="slider-container">
                  <OwlCarousel options={options}>
                    <div className="browse-slide">
                      <img />
                      <div>
                        <p>Browse cards from every expansion that was released!</p>
                        <IndexLink to='/browseCards'>Browse Cards</IndexLink>
                      </div>
                    </div>
                    <div className="create-slide">
                      <img />
                      <div>
                        <p>Create your own deck from all of the available cards!</p>
                        <IndexLink to='/createDeck'>Create deck</IndexLink>
                      </div>
                    </div>
                    <div className="about-slide">
                      <div>
                        <p>Read more about the project itself and it's creator</p>
                        <IndexLink to='/aboutProject'>About project</IndexLink>
                      </div>
                    </div>
                  </OwlCarousel>
                  </div>
            )
        }
}
export default Carousel;
