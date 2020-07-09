import React from "react"
import Layout from "../components/layout"
import { navigate } from 'gatsby-link'
import SEO from "../components/seo"

import '../styles/utils.css';
import '../styles/Home.css';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


const ContactPage = () => {

  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }


  return (
    <Layout>

      <SEO title="Contact" />

      <div className="row d-flex justify-content-center full-page-height">


        <div className="col-md-12 d-flex justify-content-center text-center">
          <h1 className="white d-flex align-items-center text-align-center">Say Hi!</h1>
        </div>




        <div className="col-md-5 d-flex justify-content-center">

          <form
            name="contact"
            method="post"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >

            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
            </p>


            <p>
              <label>
                Your name:
            <br />
                <input type="text" name="name" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your email:
            <br />
                <input type="email" name="email" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Message:
            <br />
                <textarea name="message" onChange={handleChange} />
              </label>
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
