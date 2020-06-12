import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import client from './SanityClient'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

import Project from './Project';
import About from './About';
import Competences from './Competences';
import Footer from './Footer';

import './style/ProjectPage.scss';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

class ProjectPage extends Component {
    state = {
        posts: []
    }
    

    getData() {
        let Pid = this.props.location.state.Pid;

        client
        .fetch(
            '*[_type == "post" && _id == "'+Pid+'"]{_id, listTitle, slug, mainImage, detailsBy, detailsCreated, detailsTechnologies, detailsRole, detailsWebsite, body, caseImageOne, caseImageTwo, caseImageThree}',
        )
        .then(result => {
            // console.log('project:', (result))
            this.setState({
                posts: result
            });
        })
        .catch(err => {
            console.error('Oh no, error occured: ', err)
        })
    }

    componentDidMount() {
        this.getData();
        // window.scrollTo(0, 0)
    }

    componentDidUpdate() {
        this.getData();
        // window.location.reload();
        // this.refs.blankdiv.scrollIntoView()
        // window.location.scrollTop()
        // window.location.reload()
    }

    render() {
        if(!this.state.posts) {
            return null;
        }

        // const { title, slug, mainImage, detailsBy, detailsCreated,
        // detailsTechnologies, detailsRole, detailsWebsite, body, 
        // caseImageOne, caseImageTwo, caseImageThree } = this.state.posts
        console.log(this.props.location.state.Pid);
        console.log(this.state.posts);
        // console.log("AAA", this.state.id);
        // console.log("***", this.props.match);
        // console.log("***", this.props.key);
        // console.log("***", this.state.project);

        return (
            <div>
                {/* <div ref="blankdiv"></div> */}
                {this.state.posts.map((post) => (
                    <div key={post._id}>
                        <main className="projectPage-container">
                            <div className="projectPage__main-img-wrapper">
                                <img className="projectPage__main-img" src={urlFor(post.mainImage)} alt="Project" />
                            </div>
                            <h2 className="projectPage__heading">{post.listTitle.split("·")}</h2>
                            <section className="projectPage__details-wrapper">
                                <p className="projectPage__details by"><span>Project by: </span>{post.detailsBy}</p>
                                <p className="projectPage__details created"><span>Created: </span>{post.detailsCreated}</p>
                                <p className="projectPage__details tech"><span>Technologies: </span>{post.detailsTechnologies}</p>
                                <p className="projectPage__details role"><span>Role: </span>{post.detailsRole}</p>
                                <p className="projectPage__details website">website</p>
                            </section>
                            <section className="projectPage__body-text-wrapper">
                                <BlockContent className="body-text" blocks={post.body} />
                            </section>
                            <section className="projectPage__images-wrapper">
                                <div className="project-image-wrapper">
                                    <img src={urlFor(post.caseImageOne)} alt="Snaps from project" />
                                </div>
                                <div className="project-image-wrapper">
                                    <img src={urlFor(post.caseImageTwo)} alt="Snaps from project" />
                                </div>
                                <div className="project-image-wrapper">
                                    <img src={urlFor(post.caseImageThree)} alt="Snaps from project" />
                                </div>
                            </section>
                        </main>
                    </div>
                ))}
                <Project />
                <About />
            </div>
        )

        // return (
        //     <>
        //         <main className="project-page__wrapper">

        //             <section className="project-page__article-header">
        //                 <div className="article-header__image"><img src={urlFor(mainImage)} alt="Imagine projects heading" /></div>
        //                 <h1 className="article-header__heading">{title}</h1>
        //             </section>

        //             <article className="project-page__body-constrainer">
        //                 <section className="project-page__details">
        //                     <p className="details-creators"><span>By:</span> {detailsBy}</p>
        //                     <p className="details-created"><span>Created:</span> {detailsCreated}</p>
        //                     <p className="details-technologies"><span>Technologies:</span> {detailsTechnologies}</p>
        //                     <p className="details-role"><span>Role:</span> {detailsRole}</p>
        //                     <p className="details-website"><span>Website:</span><a href={detailsWebsite} target="_blank"> Imagine</a></p>
        //                 </section>
        //                 <section className="project-page__body-text">
        //                     <BlockContent className="body-text" blocks={body} />
        //                 </section>
                        // <section className="project-page__images-wrapper">
                        //     <div className="wrapper__project-image">
                        //         <img src={urlFor(caseImageOne)} alt="Snaps from project" />
                        //     </div>
                        //     <div className="wrapper__project-image">
                        //         <img src={urlFor(caseImageTwo)} alt="Snaps from project" />
                        //     </div>
                        //     <div className="wrapper__project-image">
                        //         <img src={urlFor(caseImageThree)} alt="Snaps from project" />
                        //     </div>
                        // </section>
        //             </article>
                    
        //         </main>
        //     </>
        // )
    }
}

{/* <Project /> */}
{/* <About /> */}
{/* <Competences /> */}
{/* <Footer /> */}
// ProjectPage.getInitialProps = async () => ({
// posts: await client.fetch(groq`
//     *[_type == "post"]
// `)
// })

export default ProjectPage;