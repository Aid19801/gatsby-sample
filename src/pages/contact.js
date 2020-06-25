import React, { useRef, useEffect } from "react";
import withLayout from '../components/layout1';
import SEO from "../components/seo";
// import { TweenMax, Power3 } from 'gsap';


function Contact() {

    return (


        <React.Fragment>

            <SEO title="Contact" />

            <div className="not__homepage__container">

                <h1>Contact</h1>

                <div className="p__container services opac-bg rounded flex-col">
                    <p className="orange padding-off">email</p>
                    <h3 className="white start">adrianThompson19801@gmail.com</h3>
                </div>

                <div className="p__container services opac-bg rounded flex-col">
                    <p className="orange padding-off">Phone</p>
                    <h3 className="white start">+44 (0) 7528 083 337</h3>
                </div>

                <div className="p__container services opac-bg rounded flex-col">
                    <p className="orange padding-off">Twitter</p>
                    <h3 className="white start">@Funk27</h3>
                </div>

                <div className="p__container services opac-bg rounded flex-col">
                    <p className="orange padding-off">Insta</p>
                    <h3 className="white start">@Funk27</h3>
                </div>

            </div>
        </React.Fragment>
    )
}
export default withLayout(Contact);