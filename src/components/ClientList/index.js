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
        let myTween = new TimelineLite({ paused: true });

        myTween.from(divRef, 0.5, { y: 100 })
            .to(divRef, 0.5, { y: 0, x: 0 })
            .play();

    }, [])

    return (
        <React.Fragment>
            <hr />

            <h2 className="clients-title medium-title text-center">Our Clients</h2>

            <div ref={ref => divRef = ref} className="w-100 d-flex flex-row client-imgs-container">
            { clientsArray.map((each, index) => {
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

            <hr />
        </React.Fragment>
    );
}
export default ClientList