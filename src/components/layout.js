import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useEffect, useState } from "react"
import Menu from "./menu"
import { TweenMax, Power3 } from 'gsap';
import './header.css'
import './layout.css'

const Layout = ({ siteTitle, children }) => {

  let fadeOutAsYouScrollRef = useRef(null);
  const [title, setTitle] = useState('');
  // let servicesDivSpanLineRef = useRef(null);


  useEffect(() => {
    createNewReferenceForEachPage();
  }, [])

  const createNewReferenceForEachPage = () => {
    const str = window.location.pathname.replace(/\//g, "");
    console.log('AT | str is :', str);
    if (!str) {
      
    }
  }
  // fade out as you scroll down
  useEffect(() => {
    window.addEventListener('scroll', function () {
      fadeOutAsYouScrollRef.current.style.opacity = 1 - + window.pageYOffset / 350 + '';
    });
    takeTitleFromURLtrimSlashes();
  }, []);

  const takeTitleFromURLtrimSlashes = () => {
    const str = window.location.pathname.replace(/\//g, "");
    setTitle(str);
  }

  useEffect(() => {
    // TweenMax.fromTo(servicesDivSpanLineRef, .4, { width: 0 }, { width: '82%', ease: Power3.easeIn, delay: .7 });
  }, []);

  return (
    <React.Fragment>

      <div className="nav__container">

        <div className="flex-row">
          <h2 className="nav__initial white">F</h2>
          <h2 className="nav__initial orange">27</h2>
        </div>

        <div className="nav__menu__container">
          <Menu />
        </div>

      </div>

    </React.Fragment>
  )
}


Layout.propTypes = {
  siteTitle: PropTypes.string,
}

Layout.defaultProps = {
  siteTitle: ``,
}

export default Layout
