import React, { useRef, useEffect } from "react";
import Layout from '../components/layout';
import SEO from "../components/seo";
import { TweenMax, Power3 } from 'gsap';

import Computer from '../assets/computer.svg';
import Money from '../assets/money.svg';
import Graph from '../assets/graph.svg';
import Desktop from '../assets/desktop.svg';

function ServicesPage() {


    let servicesTitleRef = useRef(null);
    let servicesDivSpanLineRef = useRef(null);
    let firstBox = useRef(null);
    let secondBox = useRef(null);
    let thirdBox = useRef(null);
    let fourthBox = useRef(null);

    useEffect(() => {
        TweenMax.fromTo(servicesTitleRef, .4, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power3.easeIn, delay: .5 });
    }, []);

    useEffect(() => {
        TweenMax.fromTo(servicesDivSpanLineRef, .4, { width: 0 }, { width: '82%', ease: Power3.easeIn, delay: 1 });
    }, []);


    useEffect(() => {
        TweenMax.fromTo(firstBox, .4, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power3.easeIn, delay: .5 });
        TweenMax.fromTo(secondBox, .4, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power3.easeIn, delay: .6 });
        TweenMax.fromTo(thirdBox, .4, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power3.easeIn, delay: .7 });
        TweenMax.fromTo(fourthBox, .4, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power3.easeIn, delay: .8 });
    }, );

    return (


        <Layout>

            <SEO title="Services" />

            <div className="not__homepage__container services-page">

                <h1 ref={ref => servicesTitleRef = ref}>Services</h1>
                <div ref={ref => servicesDivSpanLineRef = ref} className="divSpanLineRef"></div>


                <div className="stackable_row_of_svgs">

                    <div ref={ref => firstBox = ref } className="p__container services opac-bg rounded">

                        <div className="svg__container">

                            <Computer />
                        </div>
                        <h3 className="white start">Websites & Web-apps</h3>
                    </div>

                    <div ref={ref => secondBox = ref } className="p__container services opac-bg rounded">

                        <div className="svg__container">

                            <Money />
                        </div>

                        <h3 className="white start">IOS/Android applications</h3>
                    </div>
                    <div ref={ref => thirdBox = ref } className="p__container services opac-bg rounded">

                        <div className="svg__container">

                            <Graph />
                        </div>

                        <h3 className="white start">API & Data</h3>
                    </div>
                    <div ref={ref => fourthBox = ref }  className="p__container services opac-bg rounded">


                        <div className="svg__container">

                            <Desktop />
                        </div>

                        <h3 className="white start">Desktop Applications</h3>
                    </div>


                </div>








            </div>
        </Layout>
    )
}
export default ServicesPage