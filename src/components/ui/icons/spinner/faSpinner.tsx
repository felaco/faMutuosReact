import React from 'react';
import './faSpinner.scss';

const FaSpinner = () => {
    return (
        <div className="loader">
            <svg className="circular" viewBox="0 0 100 100">
                <circle className="path" fill="none" r="20" cx="50" cy="50" strokeWidth="3" strokeMiterlimit="10"/>
            </svg>
        </div>
    );
};

export default FaSpinner;
