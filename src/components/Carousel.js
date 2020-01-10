import React, { Component } from 'react';

import './Carousel.css';

const images = [
  'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
  `https://images.unsplash.com/photo-1566847438217-76e82d383f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80`,
  `https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80`,
  `https://images.unsplash.com/photo-1537274327090-c8cd4bdb714d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`,
];

export class Carousel extends Component {
  state = {
    currentIndex: 0,
  };

  carousel = null;
  componentDidMount() {
    this.carousel.focus();
  }
  onKeyDown = event => {
    const direction = event.key;
    this.setState({
      currentIndex: Math.min(
        Math.max(
          this.state.currentIndex + (direction === 'ArrowRight' ? 1 : -1),
          0
        ),
        images.length - 1
      ),
    });
  };
  render() {
    const { currentIndex } = this.state;
    console.log(currentIndex);
    return (
      <div className="main">
        <h1 className="title">CATS CAROUSEL</h1>
        <div
          onKeyDown={this.onKeyDown}
          className={`carousel`}
          style={{
            transform: `translateX(${-currentIndex * 100}%)`,
            transition: 'transform 2s ease',
          }}
          ref={ref => (this.carousel = ref)}
          tabIndex="-1"
        >
          {images.map(img => (
            <div className="container">
              <img className="kittenPic" src={img} alt="nice kitten" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
