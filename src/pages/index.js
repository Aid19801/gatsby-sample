import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { TweenMax } from 'gsap';
import { gsap, Power3, TimelineLite } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RowOfBoxes from "../components/RowOfBoxes";
import ClientList from "../components/ClientList";
import Socials from "../components/Socials/socials"

import '../styles/utils.css';
import '../styles/Home.css';



const IndexPage = () => {

  const { site: { siteMetadata: { hero_text_one, hero_text_two } } } = useStaticQuery(pageQuery);

  let heroTextOneRef = useRef(null);
  let rocketRef = useRef(null);

  let ideasImageRef = useRef(null);
  let ideasTitleRef = useRef(null);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }
  }, [])

  useEffect(() => {
    TweenMax.fromTo(heroTextOneRef, .5, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: .6 });
    TweenMax.fromTo(rocketRef, .3, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: 2 });
  }, []);

  useEffect(() => {
    gsap.fromTo(ideasImageRef,
      {
        scrollTrigger: ideasImageRef,
        opacity: 0
      },
      {
        scrollTrigger: ideasImageRef,
        opacity: 1,
        delay: .6,
        ease: Power3.easeIn,
      });

      gsap.fromTo(ideasTitleRef,
        { scrollTrigger: ideasTitleRef, x: 500 },
        { scrollTrigger: ideasTitleRef, x: 0 },
        )

  }, [])

  return (
    <Layout>

      <SEO title="Home" />



      <div className="row full-page-height">



        <div className="col-md-7 d-flex justify-content-center text-center">
          <h1 ref={ref => heroTextOneRef = ref} className="big_title d-flex align-items-center">{hero_text_one}</h1>
        </div>

        <div className="rocket-div col-md-5 d-flex contain-content align-items-center">
          <img ref={ref => rocketRef = ref} src={require('../images/rocket.jpg')} alt="rocket" />
        </div>

      </div>


      <div className="row full-page-height">

        <div className="col-md-12 d-flex justify-content-center text-center nopadding bg-black">
          <div
            className="big-fade-img"
          >
            <h1>Funk-27</h1>
          </div>
        </div>

      </div>


      <div className="row clients-row">

        <div className="col-md-12 d-flex align-items-center flex-column">
          <ClientList />
        </div>

      </div>

      <div className="row ideas-row">

        <div className="col-md-6 d-flex justify-content-end contain-content">
          <div className="box">
            <img ref={ref => ideasImageRef = ref} src={require('../images/manLaptop.jpeg')} alt="man with laptop" />
          </div>
        </div>


        <div className="col-md-6 d-flex justify-content-center text-center">
          <h1 ref={ref => ideasTitleRef = ref} className="big_title d-flex align-items-center cursive">{hero_text_two}</h1>
        </div>



      </div>



      <div className="row">

        <div className="col-md-12 d-flex align-items-center flex-column">
          <RowOfBoxes />
        </div>


      </div>


      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

      </div>


      <Socials />



      <Link to="/contact"><h2 className="white cursive text-align-center">Say Hi!</h2></Link> <br />



    </Layout>
  )
}


export const pageQuery = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
              title
              hero_text_one
              hero_text_two
            }
        }
    }
`

export default IndexPage
