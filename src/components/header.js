import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"
import './header.css'

const Header = ({ siteTitle, children }) => (
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

    <div className="layout__content_container"
      >
        <main>{children}</main>
      </div>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
