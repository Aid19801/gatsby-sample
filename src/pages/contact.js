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
        TweenMax.fromTo(servicesDivSpanLineRef, .4, { width: 0 }, { width: '82%', ease: Power3.easeIn, delay: .7 });
    }, []);

    return (


        <Layout>

            <SEO title="Services" />

            <div className="not__homepage__container">

                <h1 ref={ref => servicesTitleRef = ref}>Contact</h1>
                <div ref={ref => servicesDivSpanLineRef = ref} className="divSpanLineRef"></div>

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
        </Layout>
    )
}
export default ServicesPage