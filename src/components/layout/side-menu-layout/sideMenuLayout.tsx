import React from 'react';
import './sideMenuLayout.scss';
import SideMenuItem from "./side-menu-item/SideMenuItem";
import ChartIcon from "../../ui/icons/chart-icon/chartIcon";

const SideMenuLayout = () => {
    return (
        <div className='side-menu-layout'>
            <h1>FMutuos</h1>
            <SideMenuItem selected>
                <ChartIcon/>
                <span className='ml-2'>Dashboard</span>
            </SideMenuItem>
            <SideMenuItem>
                <ChartIcon/>
                <span className='ml-2'>Fondos</span>
            </SideMenuItem>
        </div>
    );
};

export default SideMenuLayout;