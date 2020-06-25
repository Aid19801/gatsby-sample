import React from 'react';
import withLayout from '../components/layout1';
import './page.css';
import Pane from '../components/pane';

function About() {
  return (
    <React.Fragment>
      <div className="pimg1 extra-height">
        <Pane />
      </div>


    </React.Fragment>
  );
}

export default withLayout(About);