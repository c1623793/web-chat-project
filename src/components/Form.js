import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/App.css';

class Form extends Component {

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
            <div className="site-section bg-image2 overlay" id="contact-section" data-aos="fade-up">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h2 className="section-title mb-3 text-white">Get In Touch</h2>
                            <p className="text-white">Do you have a question?</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7 mb-5">
                            <form action="index.html" data-aos="fade-up" method="POST">
                                <div className="row form-group">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="text-white" for="fname">Name</label>
                                        <input type="text" id="fname" className="form-control rounded-0" required></input>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="text-white" for="lname">Email</label>
                                        <input type="text" id="lname" className="form-control rounded-0"></input>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-white" for="message">Your message</label>
                                        <textarea name="message" id="message" cols="30" rows="7" className="form-control rounded-0"
                                            placeholder="Leave your message here..."></textarea>
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <input type="submit" id="submit" value="Send Message" className="btn btn-primary mr-2 mb-2 text-white"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Form;