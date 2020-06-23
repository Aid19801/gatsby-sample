import { Link } from "gatsby"
import React from "react"
import Menu from "./menu"
import './header.css'
import './layout.css'

const withLayout = MyComponent => {

    return class extends React.Component {
        
        render() {

            return (
                <React.Fragment>
                    <div className="nav__container">

                        <div className="flex-row">
                            <h2 className="nav__initial white">F</h2>
                            <h2 className="nav__initial orange">27</h2>
                        </div>

                        <div className="nav__menu__container">
                            <Menu />
                        </div>
                    </div>

                    <MyComponent {...this.props} />


                </React.Fragment>
            )
        }

    }
}

export default withLayout