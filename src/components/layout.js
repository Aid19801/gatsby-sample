import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"
import './header.css'
import './layout.css'

const Layout = ({ siteTitle, children }) => (
  <React.Fragment>
    <header
      id="showcase"
    >
      <div className="navbartop">

        <div className="flex-row">
          <h2 className="nav__initial white">F</h2>
          <h2 className="nav__initial orange">.</h2>
        </div>

        <div className="navbartop__menu">
          <Menu />
        </div>

      </div>

    </header>

    <section>{children}</section>

  </React.Fragment>
)

Layout.propTypes = {
  siteTitle: PropTypes.string,
}

Layout.defaultProps = {
  siteTitle: ``,
}

export default Layout
