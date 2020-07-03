import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { TweenMax } from 'gsap';
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

  useEffect(() => {
    TweenMax.fromTo(heroTextOneRef, .5, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: .6});
    TweenMax.fromTo(rocketRef, .3, { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: 2 });
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
    

      <div className="row">

        <div className="col-md-12 d-flex align-items-center flex-column">
          <ClientList />
        </div>

      </div>




      <div className="row">

        <div className="col-md-5 d-flex justify-content-center contain-content">
          <img src={require('../images/rocket.jpg')} alt="rocket" />
        </div>


        <div className="col-md-7 d-flex justify-content-center text-center">
          <h1 className="big_title d-flex align-items-center">{hero_text_two}</h1>
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



      <Link to="/page-2/">Go to page 2</Link> <br />

      

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
