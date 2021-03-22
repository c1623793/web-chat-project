import React, { Component } from 'react';
import '../css/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


class Navigation extends Component {

    constructor(props){
        super(props);
      }
      componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }

    render() {
        return (
            <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6 col-md-3 col-xl-4  d-block">
                            <h1 className="mb-0 site-logo"><a href="index.html" className="text-black h2 mb-0">Laurate
                      <span classMame="text-primary">.</span> </a>
                            </h1>
                        </div>
                        <div className="col-12 col-md-9 col-xl-8 main-menu">
                            <nav className="site-navigation position-relative text-right" role="navigation">
                                <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ml-0 pl-0">
                                    <li><a href="#home-section" className="nav-link">Home</a></li>
                                    <li><a href="#skills-section" className="nav-link">Skills</a></li>
                                    <li><a href="#projects-section" className="nav-link">Projects</a></li>
                                    <li><a href="#contact-section" className="nav-link">Contact</a></li>
                                    <li><a href="https://devcraze.com/" target="_blank" className="nav-link">Blog</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-6 col-md-9 d-inline-block d-lg-none ml-md-0"><a href="#"
                            className="site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
};

export default Navigation;