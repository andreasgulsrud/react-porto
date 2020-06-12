import React, { Component } from 'react';

import './style/Footer.scss';

class Footer extends Component {

    render() {
      
      return (

        <footer className="footer__wrapper">
          <div className="footer__line"></div>
          <section className="footer__contact-details">
            <p className="contact-details"><a href="mailto:andgulsrud@gmail.com">andgulsrud@gmail.com</a></p>
            <p className="contact-details"><a href="tel:41224271">+47 412 24 271</a></p>
            <p className="contact-details"><a href="https://www.linkedin.com/in/andreas-gulsrud-64a87357/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </section>
          <div className="footer__line"></div>
        </footer>

      )
    }
}

export default Footer;