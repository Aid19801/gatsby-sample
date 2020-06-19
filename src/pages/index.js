import React, { useRef, useEffect } from "react";
import Layout from '../components/layout';
import SEO from "../components/seo";
import { TweenMax, Power3 } from 'gsap';

const IndexPage = () => {

  let titleRef = useRef(null);
  let divSpanLineRef = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(titleRef, .4, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power3.easeIn, delay: .5 });
  }, []);

  useEffect(() => {
    TweenMax.fromTo(divSpanLineRef, .4, { width: 0 }, { width: '82%', ease: Power3.easeIn, delay: 1 });
  }, []);


  return (
    <Layout>

      <SEO title="Home" />

      <div className="homepage__title__container">
        <h1 ref={ref => titleRef = ref}>Funk 27</h1>
        <div ref={ref => divSpanLineRef = ref} className="divSpanLineRef"></div>
      </div>


    </Layout>
  );

}


export default IndexPage
 