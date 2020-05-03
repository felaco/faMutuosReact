import React from 'react';
import './faButton.scss'

const FaButton = (props: any) => {
    return (
        <button className='fa-button'>
            {props.children}
        </button>
    );
};

export default FaButton;