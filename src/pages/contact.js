import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/utils.css';
import '../styles/Home.css';



const ContactPage = () => {

  return (
    <Layout>

      <SEO title="Contact" />

      <div className="row full-page-height">


        <div className="col-md-7 d-flex justify-content-center text-center">
          <h1 className="white d-flex align-items-center">Say Hi!</h1>
        </div>


      </div>

      

    </Layout>
  )
}


export default ContactPage
