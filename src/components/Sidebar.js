import React, { Component } from 'react';
import '../css/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }
    render() {
        return (
            <div className="site-wrap" id="home-section">
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>
            </div>
        )

    }

};

export default Sidebar;