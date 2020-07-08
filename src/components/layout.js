import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
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
