import React from 'react';
import Mail from '../assets/mail.svg';
import Twitter from '../assets/twitter.svg';
import Facebook from '../assets/facebook.svg';
import Linkedin from '../assets/linkedin.svg';
import './socials.css';

function Socials({ ...props }) {

    return (
        <React.Fragment>

            <div className="socials__container">
                <a href="mailto:funktwentyseven@gmail.com" className="socials__svg_descr_container">
                    <Mail />
                    <p>Email</p>
                </a>
                <a className="socials__svg_descr_container" href="https://www.twitter.com/funkTwentySeven/">
                    <Twitter />
                    <p>Twitter</p>
                </a>
                <a className="socials__svg_descr_container" href="https://www.facebook.com/funkTwentySeven/">
                    <Facebook />
                    <p>Facebook</p>
                </a>


                <a className="socials__svg_descr_container" href="https://www.linkedin.com/company/funk-27">
                    <Linkedin />
                    <p>Linkedin</p>
                </a>

            </div>

        </React.Fragment>
    );
}
export default Socials