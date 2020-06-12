import React, { Component } from 'react';

import './style/Header.scss';

// import Scroll from './img/scroll.png';
import ScrollWhite from './img/scroll-white.svg';
import ScrollBlack from './img/scroll-black.svg';

class Header extends Component {

  moveHeading() {
    let headingTitle = document.querySelector('.heading-title')
    let headingName = document.querySelector('.heading-name')
    // let scrollerWrapper = document.querySelector('.header-scroller__wrapper')

    window.addEventListener('scroll', function(scrolling) {
      if (scrolling) {
        headingTitle.style.right = (this.pageYOffset) + 'px';
        headingName.style.left = (this.pageYOffset) + 'px';
        // scrollerWrapper.style.top = (this.pageYOffset * 2.5) + 'px';
        // console.log(this.pageYOffset)
      }
      if (this.pageYOffset >= 1200) {
        headingTitle.innerHTML = 'Hello again.';
      }

    })
  }
  
  componentDidMount() {
    this.moveHeading();
  }

  render() {
    
    return (
      <header className="header-wrapper">
        <div className="header-wrapper__border">
          <div className="heading-wrapper">
              <h1 className="heading-title">Hello.</h1>
              <h1 className="heading-name">I am Andreas Gulsrud.</h1>
              <h2 className="heading-what">· Aspiring developer ·</h2>
          </div>
          <div className="header-scroller__wrapper">
              <img src={ScrollWhite} alt="Scroll message" />
          </div>
          </div>
      </header>
      
    )
  }
}

export default Header;