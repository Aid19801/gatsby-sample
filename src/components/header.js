import React, { useRef, useEffect } from 'react';
import { Link } from "gatsby"
import { TweenMax } from 'gsap';
import PropTypes from "prop-types"

import '../styles/Header.css';

const Header = ({ siteTitle }) => {

  let headerRef = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(headerRef, .3, { opacity: 0, y: -50 }, { opacity: 1, y: 0, delay: .6 });
  }, []);

  return (
    <header
      ref={ref => headerRef = ref}
      style={{
        background: `black`,
        // marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <div className="d-flex flex-row">

              <p>{siteTitle.slice(0, 1)}</p>
              <p>{siteTitle.slice(1, 3)}</p>
            </div>
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
