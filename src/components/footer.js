import React, { useEffect, useState } from 'react';
import './footer.css';

function Footer({ ...props }) {

const [ data, setData ] = useState([]);

useEffect(() => {

}, [])
return (
     <div className="footer__container">
        <h3>© 2020 Funk-27</h3>
        <p>Funk-27 is a Limited Company findable on Companies House database as of July 2020. The business operates in a standard contractual, consultancy manner and will invoice on a 28-day periodical basis, except for in cases of Programme Delivery whereby a tranche arrangement may be considered. Funk-27 is lead by Director, Adrian Thompson and retain an office in South East / London</p>
     </div>
);
}
export default Footer