import React from 'react';
import { Link } from 'gatsby';
import './menu.css';

const Menu = () => (
    <div className="menu__container" style={{ paddingTop: '10px'}}>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', margin: 0 }}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
);
export default Menu