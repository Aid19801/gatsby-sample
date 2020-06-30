import React from "react"
import Menu from "./menu"
import Footer from './footer';
import { TweenMax, Power3 } from 'gsap';
import './header.css'
import './layout.css'

const withLayout = MyComponent => {

    return class extends React.Component {

        constructor() {
            super();
            this.navRef = React.createRef();
            this.isHome = window.location.pathname === '/';
        }

        componentDidMount() {
            // const isHome = window.location.pathname === '/';

            if (this.isHome) {
                TweenMax.fromTo(this.navRef, .4, { opacity: 0, y: -150 }, { opacity: 1, y: 0, ease: Power3.easeIn, delay: .5 });
            }
        }

        render() {

            return (
                <React.Fragment>
                    <div className={this.isHome ? `nav__container fade-in-pre-styling` : `nav__container`} ref={ref => this.navRef = ref}>

                        <div className="flex-row">
                            <h2 className="nav__initial white">F</h2>
                            <h2 className="nav__initial orange">27</h2>
                        </div>

                        <div className="nav__menu__container">
                            <Menu />
                        </div>
                    </div>

                    <MyComponent {...this.props} />


                    <Footer />
                </React.Fragment>
            )
        }

    }
}

export default withLayout