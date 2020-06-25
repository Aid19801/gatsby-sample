import React from 'react';
import withLayout from '../components/layout1';
import Socials from '../components/Socials';
import './page.css';

function Contact() {
    return (
        <React.Fragment>
            <div className="pimg1">
                <div className="ptext contact__page">

                    
                    <span>
                        <Socials />
                    </span>
                    
                </div>
            </div>


            <section className="section section-dark">
                <h2>Get Funktional</h2>
                <p>Whether you're a start-up looking for your first Proof Of Concept app or a business with hundreds of employees considering a new timesheeting system - we're here to look at the options with you and to deliver the technology you need.</p>
                <br />
                <p>We span across the Front End and Middleware layers to bring you a slick user experience to attract the investment or customers you need to thrive.</p>
                <br />
            </section>


            <div className="pimg3">
                <div className="ptext">

                    <span className="border trans">
                        We Live Tech
                    </span>
                </div>
            </div>


            <div className="pimg1">
                <div className="ptext">

                    <span className="border">
                        Funk-27
                </span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default withLayout(Contact);