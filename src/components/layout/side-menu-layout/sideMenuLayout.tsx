import React from 'react';
import './sideMenuLayout.scss';
import SideMenuItem from "./side-menu-item/SideMenuItem";
import ChartIcon from "../../ui/icons/chart-icon/chartIcon";
import ListIcon from "../../ui/icons/list-icon/listIcon";

const SideMenuLayout = () => {
    return (
        <div className='side-menu-layout'>
            <div className='side-menu-fixed'>
                <h1>FMutuos</h1>
                <SideMenuItem selected>
                    <ChartIcon/>
                    <span className='ml-2'>Dashboard</span>
                </SideMenuItem>
                <SideMenuItem>
                    <ListIcon/>
                    <span className='ml-2'>Fondos</span>
                </SideMenuItem>
            </div>
        </div>
    );
};

export default SideMenuLayout;
