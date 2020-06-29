import React from 'react';
import './faCard.scss';

interface FaCardProps {
    header?: string;
    padding?: boolean;
    classNameList?: Array<string>;
    children?: any;
}

const FaCard = (props: FaCardProps) => {
    const classListBody = ['fa-card-body'];
    if (props.padding) {
        classListBody.push('fa-card-padding');
    }

    let header = null;
    if (props.header) {
        header = <div className='fa-card-header'>
            {props.header}
        </div>
    }

    if (props.classNameList)
        classListBody.push(...props.classNameList)

    return (
        <div className='fa-card'>
            {header}
            <div className={classListBody.join(' ')}>
                {props.children}
            </div>
        </div>
    );
};

FaCard.defaultProps = {
    header: null,
    padding: false
}

export default FaCard;
