import React from 'react';
import './Keynumber.css';

const Keynumber = (props) => {
    return (
        <div className = "keynum" style={props.style}>
            <button className = "keynum-btn" onClick={props.onClick}>{props.number}</button>
        </div>
    ) ;
}

export default Keynumber;