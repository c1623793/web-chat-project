import React, { Component } from 'react';
import '../css/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import searchProjectOne from '../assets/searching_project.svg';
import searchProjectTwo from '../assets/searching_project.svg';
import searchProjectThree from '../assets/searching_project.svg';
class Projects extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        AOS.init({
            // duration: 2000
        })
    }
    render() {
        return (
            <div className="skills-section" id="projects-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center text-center" data-aos="fade-up">
                        <div className="col-7 text-center  mb-5">
                            <h2 className="section-title">Projects</h2>
                            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="project">
                                <div className="bio-img">
                                    <img src={searchProjectOne} alt="Image" className="img-fluid"></img>
                                    <div className="social">
                                        <a href="https://github.com/lauratesan" target="_blank"><span className="icon-github"></span></a>
                                    </div>
                                </div>
                                <h2 className="text-black h1">Project One</h2>
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui
                                doloribus perspiciatis ipsa modi accusantium repellat.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="project">
                                <div className="bio-img">
                                    <figure>
                                        <img src={searchProjectTwo} alt="Image" className="img-fluid"></img>
                                    </figure>
                                    <div className="social">
                                        <a href="https://github.com/lauratesan" target="_blank"><span className="icon-github"></span></a>
                                    </div>
                                </div>
                                <h2 className="text-black h1">Project 2</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui
                                doloribus
            perspiciatis ipsa modi accusantium repellat.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="project">
                                <div className="bio-img">
                                    <figure>
                                        <img src={searchProjectThree} alt="Image" className="img-fluid"></img>
                                    </figure>
                                    <div className="social">
                                        <a href="https://github.com/lauratesan" target="_blank"><span className="icon-github"></span></a>
                                    </div>
                                </div>
                                <h2 className="text-black h1">Project 3</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui
                                doloribus
            perspiciatis ipsa modi accusantium repellat.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

export default Projects;