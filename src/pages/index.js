import React, { useRef, useEffect, useState } from "react"
import withLayout from '../components/layout1';
import SEO from "../components/seo";
import { TweenMax, Power3 } from 'gsap';
import Menu from '../components/menu';
import ReactRellax from 'react-rellax';
import RowOfBoxes from "../components/RowOfBoxes";


const IndexPage = () => {

  const [title, setTitle] = useState('');
  let homeLineRef = useRef(null);

  useEffect(() => {
    takeTitleFromURLtrimSlashes();
  }, [])

  const takeTitleFromURLtrimSlashes = () => {
    const str = window.location.pathname.replace(/\//g, "");
    setTitle(str);
  }

  useEffect(() => {
    TweenMax.fromTo(homeLineRef, .4, { width: 0 }, { width: '82%', ease: Power3.easeIn, delay: .7 });
  }, []);
  
  return (

    <React.Fragment>
    
    <SEO title="Home" />
      
      <div className="header plop">
        <div id="bg">

        <ReactRellax speed={7} style={{ height: '100%' }}>
        
          <div className="flex-center flex-col h-100">
            <h1 className="main-title">{title ? title : 'Funk-27'}</h1>
            <div ref={ref => homeLineRef = ref} className="divSpanLineRef"></div>  
          </div>

        </ReactRellax>
        </div>
      </div>

    

    

      <ReactRellax>

      <section className="home__boxes__container">
       <RowOfBoxes />
      </section>
        

      </ReactRellax>
    
  
   
    </React.Fragment>


      

  );

}


export default withLayout(IndexPage);
 