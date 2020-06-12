import React, { Component } from 'react';

import './style/Competences.scss';

import sketchLogo from './img/sketch_logo.png';
import sassLogo from './img/sass_logo.png';
import reactLogo from './img/react_logo.png';
import sanityLogo from './img/sanity_logo.png';

class Competences extends Component {

  render() {
    
    return (

      <main className="competences__wrapper">
        <section className="competences__logo sketch"><img src={sketchLogo} /></section>
        <section className="competences__logo sass"><img src={sassLogo} /></section>
        <section className="competences__logo react"><img src={reactLogo} /></section>
        <section className="competences__logo sanity"><img src={sanityLogo} /></section>
      </main>

    )
  }
}

export default Competences;