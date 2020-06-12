import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import client from './SanityClient'

import Header from './Header';
import Projects from './Projects';
import Project from './Project';
import About from './About';
import Competences from './Competences';
import Footer from './Footer';
import ProjectPage from './ProjectPage';
import HeroFadeOut from './HeroFadeOut';

import './style/App.scss';

class App extends Component {

    state = {
      slug: null,
    }
  

  getData() {

    client
    .fetch(
        '*[_type == "post"]{_id, slug }', // Query
    )
    .then(result => {
        // console.log('project:', (result))
        this.setState({
            slug: result
        });
    })
    .catch(err => {
        console.error('Oh no, error occured: ', err)
    })
  }

  componentDidMount() {
    this.getData();
  }
    
  render() {
    if(!this.state.slug) {
      return null;
    }

    const slug = this.state.slug;
    console.log(slug);
    
    return (
      <div className="App">
        <Router>
          {/* <Switch> */}

          <Route exact path="/" component={Header} />
          <Route exact path="/" component={HeroFadeOut} />
          <Route exact path="/" component={Project} />
          <Route path="/ProjectPage/" component={ProjectPage} />
          <Route exact path="/" component={About} />
          {/* </Switch> */}
       </Router>
      </div>
    )
  }
}

export default App;
