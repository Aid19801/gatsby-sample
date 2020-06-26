import React from 'react';
import withLayout from '../components/layout1';
import Socials from '../components/Socials';
import './page.css';

function Contact() {
    return (
        <React.Fragment>
            


            <div className="pimg1">
                <div className="ptext">

                    <span className="border trans">
                        say hello
                    </span>
                </div>
            </div>



            <section className="section section-dark contact__page">
                <h2>Get Funktional</h2>
                <p>If you want help on your tech projects, get in touch today.</p>
                <Socials />
            </section>


            <div className="pimg2">
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