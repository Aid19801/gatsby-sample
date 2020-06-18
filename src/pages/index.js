import React, { useRef, useEffect } from "react";
import Header from '../components/header';
import SEO from "../components/seo";
import { TweenMax, Power3 } from 'gsap';

const IndexPage = () => {

  let titleRef = useRef(null);
  let divSpanLineRef = useRef(null);
  let opacBannerRef = useRef(null);

  useEffect(() => {
    // TweenMax.to(titleRef, .5, { opacity: 1, x: 0, ease: Power3.easeInOut, delay: 1.5 });
    TweenMax.fromTo(titleRef, .4, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power3.easeIn, delay: .5 });
  }, []);

  useEffect(() => {
    TweenMax.fromTo(divSpanLineRef, .4, { width: 0 }, { width: '82%', ease: Power3.easeIn, delay: 2 });
  }, []);

  useEffect(() => {
    TweenMax.fromTo(opacBannerRef, .4, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power3.easeIn, delay: .5 });
  }, []);


  return (
    <Header>
      <SEO title="Home" />

      <h1 ref={ref => titleRef = ref}>Funk <strong>Digital</strong></h1>


      <div ref={ref => divSpanLineRef = ref} className="divSpanLineRef"></div>



      <div className="stack-three">
        <div className="box-1">here is a box</div>
        <div className="box-1">here is a box</div>
        <div className="box-1">here is a box</div>
      </div>
      
      <div ref={ref => opacBannerRef = ref} className="opac-banner opac-bg">
        <p>Simple</p>
        <p>Elegant</p>
        <p>Design</p>
      </div>


    </Header>
  );

}


export default IndexPage
