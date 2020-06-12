import React, { Component } from 'react';
import Competences from './Competences'
import Footer from './Footer'

import './style/About.scss';

import Profile from './img/andreas-bw.png';

class About extends Component {
    
    render() {
      return (
        <main className="about__wrapper">
          <section className="about__constrainer">

            <section className="about__heading-wrapper">
                <h2 className="about__heading">How can I help?</h2>
                <Competences />
                <div className="about__heading-profile-image-wrapper">
                    <img src={Profile} />
                </div>
                <div className="about__heading-line"></div>
            </section>

            <section className="about__text-section-wrapper">
                <article className="about__text-section"><p>When I make something, school assignments, hobby projects or work in general, I always try to understand the needs of a potential user. Whether she or he is about to buy a bus ticket, do some online shopping or just get triggered to push a button - I want to make the technology functional and user friendly.</p><br /><p>I am very curious about technology, and enjoy being creative with it. I find this to be a great educational source, a motivational factor and a nice way to stay up to date. I really enjoy the sense of achievement and the feeling of understanding new technologies and concepts. </p></article>
                <article className="about__text-section"><p>For that reason I am looking for a workplace where personal and professional development is in focus, and where learning from each other is highly appreciated.</p><br /><p>To make smart, elegant, well functioning digital solutions for cross platforms is something I want to delve into. I have had the pleasure of working as an intern developer at <a href="http://www.deloittedigital.no" target="_blank"> Deloitte Digital,</a> and picked up some good tips and tricks here. Now I am looking forward to new challenges!</p><br /><p>I am always open for a conversation, so please don't hesitate to say hi👋🏼</p></article>
            </section>
            <Footer />
          </section>
        </main>
      )
    }
  }

export default About;