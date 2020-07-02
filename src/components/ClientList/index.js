import React, { useEffect, useRef } from 'react';
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import '../../styles/ClientList.css';

function ClientList({ ...props }) {

    let divRef = useRef(null)
    let h2ref = useRef(null)

    useEffect(() => {
        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals("ScrollTrigger", ScrollTrigger)
        }
    }, [])

    useEffect(() => {        
        gsap.fromTo(divRef, {
            opacity: 0,
            y: 100,
        }, {
            scrollTrigger: ".client-imgs-container", // start the animation when ".box" enters the viewport (once)
            ease: Power3.ease,
            opacity: 1,
            duration: .8,
            y: 0,
        });

        gsap.fromTo(h2ref, {
            opacity: 0,
            y: 100,
        }, {
            scrollTrigger: ".clients-title", // start the animation when ".box" enters the viewport (once)
            ease: Power3.ease,
            opacity: 1,
            duration: .8,
            y: 0,
        })
    }, [])

    return (
        <React.Fragment>
            <hr />

            <h2 ref={ref => h2ref = ref}  className="clients-title medium-title text-center">Our Clients</h2>
            
            <div ref={ref => divRef = ref} className="d-flex flex-row client-imgs-container">
                <img className="client-img" src={require('../../images/sky.png')} alt="sky" />
                <img className="client-img" src={require('../../images/reuters.png')} alt="thomson_reuters" />
                <img className="client-img" src={require('../../images/infabode.png')} alt="infabode" />
                <img className="client-img" src={require('../../images/finsa.png')} alt="finsa" />
                <img className="client-img" src={require('../../images/tradenation.svg')} alt="finsa" />
            </div>

            <hr />
        </React.Fragment>
    );
}
export default ClientList