import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/utils.css';
import '../styles/Home.css';



const ContactPage = () => {

  return (
    <Layout>

      <SEO title="Contact" />

      <div className="row d-flex justify-content-center full-page-height">


        <div className="col-md-12 d-flex justify-content-center text-center">
          <h1 className="white d-flex align-items-center text-align-center">Say Hi!</h1>
        </div>




        <div className="col-md-5">

          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Message: <textarea placeholder="How can we help?" name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>


      </div>



    </Layout>
  )
}


export default ContactPage
