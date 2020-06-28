import React from 'react';
import withLayout from '../components/layout1';
import Pane from '../components/pane';
import SEO from "../components/seo"
import './page.css';

function About() {
  return (
    <React.Fragment>

      <SEO title="About Us" />

      <div className="pimg1 extra-height">
        
      </div>

      <Pane />

    </React.Fragment>
  );
}

export default withLayout(About);