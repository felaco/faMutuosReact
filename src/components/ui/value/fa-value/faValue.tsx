import React from 'react';
import './faValue.scss';

interface FaValueProps {
    value: number;
    digits?: number;
    showDecimals?: boolean;
    bold?: boolean;
    percentage?: boolean;
    displayColor?: boolean;
    metricText?: string;
}

const FaValue = (props: FaValueProps) => {
    const classList = ['fa-value'];
    const digits = props.showDecimals ? props.digits : 0;

    let displayText = props.value.toLocaleString('en-us', { useGrouping: true, maximumFractionDigits: digits });
    displayText = displayText.replace(/,/g, 'X');
    displayText = displayText.replace(/\./g, ',');
    displayText = displayText.replace(/X/g, '.');

    if (props.percentage) {
        displayText += '%'
    }

    if (props.metricText) {
        displayText += ' ' + props.metricText;
    }

    if (props.displayColor && props.value !== 0) {
        classList.push(props.value > 0 ? 'fa-value-success' : 'fa-value-danger');
    }

    if (props.bold) {
        classList.push('fa-value-bold');
    }

    return (
        <span className={classList.join(' ')}>
            {displayText}
        </span>
    );
};

FaValue.defaultProps = {
    digits: 2,
    showDecimals: true,
    bold: false,
    percentage: false,
    displayColor: false
}

export default FaValue;