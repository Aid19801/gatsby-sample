import React from 'react';
import withLayout from '../components/layout1';
import SEO from "../components/seo"
import AboutPage from '../components/about';
import './page.css';

function About() {
  return (
    <React.Fragment>

      <SEO title="About Us" />

      <AboutPage />

    </React.Fragment>
  );
}

export default withLayout(About);