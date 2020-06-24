import React from 'react';
import withLayout from '../components/layout1';
import './page.css';

function Services() {
    return (
        <React.Fragment>
            <div className="pimg1">
                <div className="ptext">

                    <span className="border">
                            Funk-27
                    </span>
                </div>
            </div>
            <section className="section section-light">
                <h2>Who We Are</h2>
                <p>At Funk, we bring six years of high quality, commercial Software Development to you at an affordable price.
                Our software developers have worked with some of the most impressive client names in their field from Sky to Thomson Reteurs,
                 to newer names across the start-up and scale-up landscape.</p>
                 <br />
                 <p>
                 Whether it's Desktop Applications in NodeJS and Electron, an 
                 IOS/Android prototype in React Native or a new Sign-Up flow for your trading platform - our team are excited to help you 
                 get your idea to the next stage!</p>
            </section>

            <div className="pimg2">
                <div className="ptext">

                    <span className="border trans">
                        Bringing Your Ideas To Life
                    </span>
                </div>
            </div>


            <section className="section section-dark">
                <h2>What We Do</h2>
                <p>Funksters don't position themselves as over-promising Jacks-of-all-trades. We know exactly where our strengths lie.</p>
                <br />
                <p>That's why a great deal of our client work sits within the Front End / UX arena. Websites, Webapps and Proof of Concept IOS/Android Applications. But we've recently flexed out to APIs, User Authentication and yes, okay, from time to time, Desktop applications.</p>
                <br />
                <p>If you've got an idea for PC/Mac application, a promotional website, or you need a PoC IOS/Android app building, get in touch now!</p>
            </section>


            <div className="pimg3">
                <div className="ptext">

                    <span className="border trans">
                        smart solutions
                    </span>
                </div>
            </div>


            <section className="section section-dark">
                <h2>Our Clients</h2>
                <div className="flex-row client-imgs-container">
                    <img className="client-img" src={require('../images/sky.png')} alt="sky" />
                    <img className="client-img" src={require('../images/reuters.png')} alt="thomson_reuters" />
                    <img className="client-img" src={require('../images/infabode.png')} alt="infabode" />
                    <img className="client-img" src={require('../images/finsa.png')} alt="finsa" />
                    <img className="client-img" src={require('../images/tradenation.svg')} alt="finsa" />
                </div>
            </section>



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

export default withLayout(Services);