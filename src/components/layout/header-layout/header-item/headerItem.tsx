import React from 'react';
import './headerItem.scss';

interface HeaderItemProps {
    alignLeft?: boolean;
    children?: any;
}

const HeaderItem = (props: HeaderItemProps) => {
    const classList = ['header-item'];
    if (props.alignLeft){
        classList.push('header-item-left')
    }

    return (
        <div className={classList.join(' ')}>
            {props.children}
        </div>
    );
};

export default HeaderItem;