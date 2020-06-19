import React, { useRef, useEffect } from "react";
import Layout from '../components/layout';
import SEO from "../components/seo";
import { TweenMax, Power3 } from 'gsap';


function AboutPage() {


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
                <h1 ref={ref => servicesTitleRef = ref}>About</h1>
                <div ref={ref => servicesDivSpanLineRef = ref} className="divSpanLineRef"></div>

                <div className="p__container opac-bg rounded">
                    <p className="white">
                    Funk-27 was born from years of experience in high profile, household name clients.
                    Our developers have worked with an array of diverse, household names from
                    Sky to Reuters to leading names across the start-up & scale-up landscape.</p>
                    <br />
                    <p className="white">
                    We strive to ensure each project is an agile, communications-lead, engaging client experience.</p>
                </div>

            </div>
        </Layout>
    )
}
export default AboutPage
