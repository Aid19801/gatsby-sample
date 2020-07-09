import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import favicon from '../images/f27_small.png'
import Helmet from 'react-helmet'
import Header from "./header"
import "./layout.css"
import "../styles/utils.css";

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          initials
        }
      }
    }
  `)

  return (
    <React.Fragment>


      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>

      <Header siteTitle={data.site.siteMetadata.initials} />
      <div
        style={{
          margin: `0 auto`,
          background: '#68a39e',

        }}
        className="container-fluid nopadding"
      >

        <main>{children}</main>
        <footer className="cursive white text-align-center">
          © {new Date().getFullYear()},
          {` `}
          <a className="cursive white text-align-center" href="https://www.linkedin.com/in/adrian-thompson-961b7114a/">Aid Thompson</a>
        </footer>
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
