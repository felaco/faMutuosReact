import React from 'react';
import './faValueWithHeader.scss';
import FaValue from "../fa-value/faValue";

interface FaValueHeaderProps {
    value: number;
    header: string;
    digits?: number;
    showDecimals?: boolean;
    bold?: boolean;
    percentage?: boolean;
    displayColor?: boolean;
    metricText?: string;
}

const FaValueWithHeader = (props: FaValueHeaderProps) => {
    return (
        <div className='fa-value-with-header'>
            <span className='fa-value-header'>{props.header}</span>
            <FaValue value={props.value}
                     bold={props.bold}
                     digits={props.digits}
                     displayColor={props.displayColor}
                     metricText={props.metricText}
                     percentage={props.percentage}
                     showDecimals={props.showDecimals}/>
        </div>
    );
};

FaValueWithHeader.defaultProps = {
    digits: 2,
    showDecimals: true,
    bold: false,
    percentage: false,
    displayColor: false
}

export default FaValueWithHeader;