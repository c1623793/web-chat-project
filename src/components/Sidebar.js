import React, { Component } from 'react'

class Sidebar extends Component {
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
}
export default Sidebar;