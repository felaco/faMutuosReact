import React from 'react';
import './SideMenuItem.scss';

interface SideMenuItemProps {
    selected?: boolean;
    children?: any;
    clickHandler?: () => void;
}

const SideMenuItem = (props: SideMenuItemProps) => {
    const classList = ['side-menu-item'];
    if (props.selected) {
        classList.push('selected');
    }

    return (
        <div className={classList.join(' ')} onClick={props.clickHandler}>
            {props.children}
        </div>
    );
};

SideMenuItem.defaultProps = {
    selected: false,
    clickHandler: () => null
}

export default SideMenuItem;