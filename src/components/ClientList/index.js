import React, { useEffect, useRef, useState } from 'react';
import { gsap, Power3, TimelineLite } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import '../../styles/ClientList.css';

const clientsArray = ['sky', 'reuters', 'infabode', 'finsa', 'tradenation'];

function ClientList({ ...props }) {

    let divRef = useRef(null)
    // let h2ref = useRef(null)
    // const [ elements, setElements ] = useState([]);

    let elements = [];

    // let myTween = TimelineLite({ paused: true });

    useEffect(() => {
        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals("ScrollTrigger", ScrollTrigger)
        }
    }, [])

    useEffect(() => {
        gsap.fromTo(divRef,
            {
                scrollTrigger: divRef,
                y: 100,
                opacity: 0
            },
            {
            scrollTrigger: divRef, // start the animation when ".box" enters the viewport (once)
            y: 0,
            opacity: 1,
            delay: .3,
          });

    }, [])

    return (
        <React.Fragment>
            <hr />

            <h2 className="clients-title medium-title text-center">Our Clients</h2>

            <div ref={ref => divRef = ref} className="w-100 d-flex flex-row client-imgs-container">
                {clientsArray.map((each, index) => {
                    return (
                        <img
                            key={index}
                            className="client-img"
                            alt={`${each} logo`}
                            src={require(`../../images/${each}.png`)}
                            ref={ref => elements[index] = ref}
                        />
                    )
                })}

            </div>


        </React.Fragment>
    );
}
export default ClientList