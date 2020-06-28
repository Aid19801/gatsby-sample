import React from 'react';
import withLayout from '../components/layout1';
import RowOfBoxes from '../components/RowOfBoxes';
import './page.css';

function Services() {
    return (
        <React.Fragment>
            <div className="pimg1">
                <div className="ptext">

                    <span className="border">
                            Services
                    </span>
                </div>
            </div>
            <section className="section section-dark">
                <RowOfBoxes />
            </section>

            <div className="pimg2">
                <div className="ptext">

                    <span className="border trans">
                        Get Funktional
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


            <section className="section section-dark">
                <h2 className="orange">Our Developers Have Worked On These Exciting Projects</h2>
                <div className="flex-col client-projects">
                    <h2>Sky Go</h2>
                    <p>Desktop Application</p>

                    <h2>Infabode.com</h2>
                    <p>Server Side Rendered Web-App</p>

                    <h2>Tradenation</h2>
                    <p>User-Authentication Flow</p>

                    <h2>#ThatDadsApp</h2>
                    <p>Proof Of Concept iOS/Android App</p>

                    <h2>The Panda Riot</h2>
                    <p>Desktop Application & Website</p>
                </div>
            </section>



            <div className="pimg1">
                <div className="ptext bottomptext">

                    <span className="border">
                        Funk-27
                </span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default withLayout(Services);