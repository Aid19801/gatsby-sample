import React from 'react';
import Computer from '../assets/computer.svg';
import Money from '../assets/money.svg';
import Graph from '../assets/graph.svg';
import Desktop from '../assets/desktop.svg';
import './RowOfBoxes.css';

function RowOfBoxes({ ...props }) {

return (
    <div className="stackable_row_of_svgs">

        <div className="eachSVG__description__container services opac-bg rounded">

            <div className="svg__container">
                <Computer />
            </div>
            <h3 className="white start svg__descr">Websites & Web-apps</h3>
        </div>

        <div className="eachSVG__description__container services opac-bg rounded">

            <div className="svg__container">
                <Money />
            </div>

            <h3 className="white start svg__descr">IOS/Android applications</h3>
        </div>
        <div className="eachSVG__description__container services opac-bg rounded">

            <div className="svg__container">
                <Graph />
            </div>

            <h3 className="white start svg__descr">API & Data</h3>
        </div>
        <div className="eachSVG__description__container services opac-bg rounded">


            <div className="svg__container">
                <Desktop />
            </div>

            <h3 className="white start svg__descr">Desktop Applications</h3>
        </div>

  </div>
);
}
export default RowOfBoxes