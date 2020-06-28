import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';
import './pane.css';

function Pane({ ...props }) {

    let paneRef = useRef(null);

    useEffect(() => {
        TweenMax.fromTo(paneRef, .4, { opacity: 0, y: 150 }, { opacity: 1, y: 0, ease: Power3.easeIn, delay: .5 } );
    }, [])
    return (
        <div className="pane__container">

            <div className="pane__content__container" ref={ref => paneRef = ref}>
                <h1>About Us</h1>
                <p>We're starting life in 2020. Against all the odds, the Covid, the Brexit - we thought 'What Better Time To Launch!' and went for it.</p>
                <br />
                <p>Leaping into the unknown with an impressive breadth of experience across the IT, Forex, Media and Prop-Tech landscape, Funk-27 have constructed a team of first tier developers ready to address the needs of modern business.</p>
                <br />            
            </div>
            <div className="pane__content__container desktop__only">
                <p>Director, Adrian Thompson, says "Funk-27 is essentially everything I'd want to see in a creative, digital agency. I wanted to ensure there was great, modern technology and a strong focus on communications & customer service."</p>
                
                <br />            
            </div>
        </div>
    );
}
export default Pane