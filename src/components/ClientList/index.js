import React from 'react';
import '../../styles/ClientList.css';

function ClientList({ ...props }) {

    return (
        <React.Fragment>
            <hr />
            
            <h2 className="medium-title text-center">Our Clients</h2>
            <div className="d-flex flex-row client-imgs-container">
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