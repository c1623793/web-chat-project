import React, { Component } from 'react';
import '../css/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imageOne from '../assets/code_main.svg';

class Greetings extends Component {

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
            <div className="site-blocks-cover" style={{ overflow: 'hidden' }}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-12" style={{ position: 'relative' }} data-aos="fade-up" data-aos-delay="200">
                            <img src={imageOne} alt="Image" className="img-fluid img-absolute" width="800px"></img>
                            <div className="row mb-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="col-lg-6 mr-auto">
                                    <h1>Hi, I'm Laurate </h1>
                                    <p className="mb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Interested in building usable,
                                useful, and well-constructed websites. I build amazing website from scratch. <span className="text-primary">Wanna hire me? </span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default Greetings;