import React, { useRef, useEffect } from "react";
import Layout from '../components/layout';
import SEO from "../components/seo";
import { TweenMax, Power3 } from 'gsap';


function ServicesPage() {


    let servicesTitleRef = useRef(null);
    let servicesDivSpanLineRef = useRef(null);

    useEffect(() => {
        TweenMax.fromTo(servicesTitleRef, .4, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power3.easeIn, delay: .5 });
    }, []);

    useEffect(() => {
        TweenMax.fromTo(servicesDivSpanLineRef, .4, { width: 0 }, { width: '82%', ease: Power3.easeIn, delay: 1 });
    }, []);

    return (


        <Layout>

            <SEO title="Services" />

            <div className="not__homepage__container">

                <h1 ref={ref => servicesTitleRef = ref}>Services</h1>
                <div ref={ref => servicesDivSpanLineRef = ref} className="divSpanLineRef"></div>


                <div className="p__container services opac-bg rounded">
                    <h3 className="white start">💻 Websites & Web-apps</h3>
                </div>

                <div className="p__container services opac-bg rounded">
                    <h3 className="white start">📱 IOS/Android applications</h3>
                </div>
                <div className="p__container services opac-bg rounded">
                    <h3 className="white start">📊 API & Data</h3>
                </div>
                <div className="p__container services opac-bg rounded">
                    <h3 className="white start">🖥 Desktop Applications</h3>
                </div>






            </div>
        </Layout>
    )
}
export default ServicesPage