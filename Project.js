import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import client from './SanityClient'
import imageUrlBuilder from '@sanity/image-url'

import './style/Project.scss';
import ProjectPage from './ProjectPage';
        
function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

class Project extends Component {

    state = {
        projects: []
    }

    getData() {

        client
        .fetch(
            '*[_type == "post"]{_id, slug, listTitle, mainImage, listDescription}', // Query
        )
        .then(result => {
            // console.log('projects: ', (result))
            this.setState({
                projects: result
            });
        })

        .catch(err => {
            console.error('Oh no, error occured: ', err)
        })
    }
   
    
    componentDidMount() {
        this.getData();
        // console.log(window.scrollY)
        // window.addEventListener('scroll', this.handleScroll, {passive: true})
    }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll)
    //     console.log(window.scrollY)
    // }

    // componentDidUpdate() {
    //     this.refs.blankdiv.style.left = window.scrollY + "px";
    //     console.log(window.scrollY)
    // }

    scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }

    // handleScroll(event) {
    //     let container = document.querySelector(".project__list-title")
    //     container.style.left = window.scrollY + "px";
        // this.myRef = React.createRef();
        // let matches = container.querySelectorAll(".project__list-title")
        // console.log(matches)
        // let left = "left:"
        // let apos = '"';
        // let denominator = "px";
        // let pos = window.scrollY;
        // let gather = left + " " + apos + pos + denominator + apos;
        // console.log(gather)
    // }
    
    render() {
        if (!this.state.projects) {
            return null;
        }
        
        console.log(this.state.projects);
        
        return (
            <div>
                <div className="project__separator"></div>
                {/* <div className="project__separator-fade"></div> */}
                {this.state.projects.map((project) => (
                <div className="project__wrapper" key={project._id}>
                    <Link onClick={this.scrollToTop} className="project__link" to={{pathname: "/ProjectPage/" + project.slug.current, state: {Pid: project._id}}}>
                        <div className="project__list-title-wrapper">
                            <div className="project__list-title">{project.listTitle.repeat(20)}</div>
                        </div>
                        <p className="project__list-description">{project.listDescription}</p>
                        <p className="project__list-client">2019 - client</p>
                        <div className="project__list-img-wrapper">
                            <img className="project__list-img" src={urlFor(project.mainImage)} alt="Project" />
                        </div>
                    </Link>
                </div>
                ))}
            </div>
        )
    }
}

export default Project;