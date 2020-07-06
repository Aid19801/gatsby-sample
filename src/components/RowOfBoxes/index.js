import React, { useState, useEffect, useRef } from 'react';

// a load of SVGs
import Computer from '../../svgs/computer.svg';
import Money from '../../svgs/money.svg';
import Graph from '../../svgs/graph.svg';
import Desktop from '../../svgs/desktop.svg';
import CrossPlatform from '../../svgs/cross_platform.svg';
import DesignSVG from '../../svgs/design.svg';
import VisitsSVG from '../../svgs/visits.svg';
import DatabaseSVG from '../../svgs/db.svg';
import RealTimeSVG from '../../svgs/real_time.svg';
import ApiSVG from '../../svgs/api.svg';
import Blogs from '../../svgs/blogs.svg';
import SignInSVG from '../../svgs/sign_in.svg';
import ECommerce from '../../svgs/e_comm.svg';
import SoftwareSVG from '../../svgs/software.svg';
import SecuritySVG from '../../svgs/security.svg';
import FilesSVG from '../../svgs/files.svg';

// Animation
import { TweenMax, Power3 } from 'gsap';

// Gatsby / GQL
import { useStaticQuery, graphql } from "gatsby"

// CSS
import '../../styles/RowOfBoxes.css';

function RowOfBoxes({ info }) {

    const [showPopout, setShowPopout] = useState(false);
    const [popoutInfo, setPopoutInfo] = useState(null);

    let bulletOneRef = useRef(null);
    let bulletTwoRef = useRef(null);
    let bulletThreeRef = useRef(null);

    const { site: { siteMetadata: { boxesInfo } } } = useStaticQuery(boxesQuery);

    const handleSelect = (bool, info) => {
        setShowPopout(bool);
        if (info) {
            setPopoutInfo(info);
            TweenMax.to(bulletOneRef, 1, { opacity: 1, delay: 1 });
            TweenMax.to(bulletTwoRef, 1, { opacity: 1, delay: 1.1 });
            TweenMax.to(bulletThreeRef, 1, { opacity: 1, delay: 1.2 });
        }
    }

    const killAndResetAnims = () => {
        handleSelect(false);
        TweenMax.to(bulletOneRef, 1, { opacity: 0, delay: 0 });
        TweenMax.to(bulletTwoRef, 1, { opacity: 0, delay: 0 });
        TweenMax.to(bulletThreeRef, 1, { opacity: 0, delay: 0 });
    }

    return (
        <React.Fragment>

            <div className="stackable_row_of_svgs">


                <div
                    onClick={() => killAndResetAnims()}
                    className={`popout__container ${showPopout ? "active" : ""}`}
                >

                    <div className={`popout__container__inner ${showPopout ? "bounceup" : ""}`}>
                        <div className="popout__small_icon_container">
                            {popoutInfo && popoutInfo.type === 'web' && <Computer />}
                            {popoutInfo && popoutInfo.type === 'mob' && <Money />}
                            {popoutInfo && popoutInfo.type === 'data' && <Graph />}
                            {popoutInfo && popoutInfo.type === 'applications' && <Desktop />}
                        </div>

                        <h4>{popoutInfo && popoutInfo.title}</h4>
                        <p className="blurb">{popoutInfo && popoutInfo.blurb}</p>


                        <ul>

                            <li ref={ref => bulletOneRef = ref}>
                                <div className="popout__bullets__svg__container">
                                    {popoutInfo && popoutInfo.bulletOneSVG === 'blogs' && <Blogs />}
                                    {popoutInfo && popoutInfo.bulletOneSVG === 'cross_platform' && <CrossPlatform />}
                                    {popoutInfo && popoutInfo.bulletOneSVG === 'api' && <ApiSVG />}
                                    {popoutInfo && popoutInfo.bulletOneSVG === 'files' && <FilesSVG />}
                                </div>
                                <p>{popoutInfo && popoutInfo.bulletOne}</p>
                            </li>
                            <li ref={ref => bulletTwoRef = ref}>
                                <div className="popout__bullets__svg__container">
                                    {popoutInfo && popoutInfo.bulletTwoSVG === 'sign_in' && <SignInSVG />}
                                    {popoutInfo && popoutInfo.bulletTwoSVG === 'design' && <DesignSVG />}
                                    {popoutInfo && popoutInfo.bulletTwoSVG === 'db' && <DatabaseSVG />}
                                    {popoutInfo && popoutInfo.bulletTwoSVG === 'security' && <SecuritySVG />}
                                </div>
                                <p>{popoutInfo && popoutInfo.bulletTwo}</p>
                            </li>
                            <li ref={ref => bulletThreeRef = ref}>
                                <div className="popout__bullets__svg__container">
                                    {popoutInfo && popoutInfo.bulletThreeSVG === 'e_comm' && <ECommerce />}
                                    {popoutInfo && popoutInfo.bulletThreeSVG === 'visits' && <VisitsSVG />}
                                    {popoutInfo && popoutInfo.bulletThreeSVG === 'real_time' && <RealTimeSVG />}
                                    {popoutInfo && popoutInfo.bulletThreeSVG === 'software' && <SoftwareSVG />}
                                </div>
                                <p>{popoutInfo && popoutInfo.bulletThree}</p>
                            </li>
                        </ul>


                    </div>
                </div>

                {boxesInfo && boxesInfo.map((each, i) => (
                    <div
                        key={i}
                        className="eachSVG__description__container services opac-bg rounded"
                        onClick={() => handleSelect(true, each)}
                    >

                        <div className="svg__container">
                            {each.icon === "Computer" && <Computer />}
                            {each.icon === "Money" && <Money />}
                            {each.icon === "Graph" && <Graph />}
                            {each.icon === "Desktop" && <Desktop />}
                        </div>
                        <h3 className="white start svg__descr">{each.title}</h3>
                    </div>
                ))}

            </div>
            <hr />
        </React.Fragment>
    );
}

export const boxesQuery = graphql`
    query boxesQuery {
        site {
            siteMetadata {
                boxesInfo {
                    type
                    title
                    icon
                    blurb
                    bulletOne
                    bulletOneSVG
                    bulletTwo
                    bulletTwoSVG
                    bulletThree
                    bulletThreeSVG
                  }

            }
        }
    }
`
export default RowOfBoxes