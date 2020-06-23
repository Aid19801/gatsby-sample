import React, { useRef, useEffect } from "react";
import Layout from '../components/layout';
import SEO from "../components/seo";
import { TweenMax, Power3 } from 'gsap';

import Computer from '../assets/computer.svg';
import Money from '../assets/money.svg';
import Graph from '../assets/graph.svg';
import Desktop from '../assets/desktop.svg';
import withLayout from "../components/layout1";

function ServicesPage() {

    return (

        <React.Fragment>


            <SEO title="Services" />

            <div className="not__homepage__container services-page">


                <div className="stackable_row_of_svgs">

                    <div className="p__container services opac-bg rounded">

                        <div className="svg__container">

                            <Computer />
                        </div>
                        <h3 className="white start">Websites & Web-apps</h3>
                    </div>

                    <div className="p__container services opac-bg rounded">

                        <div className="svg__container">

                            <Money />
                        </div>

                        <h3 className="white start">IOS/Android applications</h3>
                    </div>
                    <div className="p__container services opac-bg rounded">

                        <div className="svg__container">

                            <Graph />
                        </div>

                        <h3 className="white start">API & Data</h3>
                    </div>
                    <div className="p__container services opac-bg rounded">


                        <div className="svg__container">

                            <Desktop />
                        </div>

                        <h3 className="white start">Desktop Applications</h3>
                    </div>


                </div>








            </div>

            </React.Fragment>

    )
}
export default withLayout(ServicesPage)