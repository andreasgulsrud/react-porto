import React, { Component } from 'react';

import Project from './Project';

import './style/Projects.scss';

class Projects extends Component {

    render() {
        return (

            <main className="projects-wrapper">
                <h2 className="projects-heading">My work</h2>
                <section className="projects-container">
                    <Project />
                </section>
            </main>

        )
    }
}

export default Projects;