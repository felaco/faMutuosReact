import React, { MouseEvent } from 'react';
import './headerLayout.scss';
import HeaderItem from "./header-item/headerItem";
import SearchInput from "../../ui/inputs/search-input/searchInput";
import { Avatar, Button, Tooltip } from "@material-ui/core";
import { GoSettings } from "react-icons/all";

interface HeaderLayoutProps {
    filterHandler?: (event?: MouseEvent) => void
}

const HeaderLayout = (props: HeaderLayoutProps) => {

    const button = <Button onClick={props.filterHandler}>
        <GoSettings />
    </Button>

    return (
        <section className='header-layout'>
            <HeaderItem alignLeft>Fondos Mutuos Chilenos más rentables</HeaderItem>
            <HeaderItem>
                <Tooltip title='Filtros'>
                    {button}
                </Tooltip>
            </HeaderItem>

            <HeaderItem>
                <SearchInput placeholder='Buscar Fondo'/>
            </HeaderItem>

            <HeaderItem>
                <Avatar classes={{ root: 'header-avatar' }}>
                    F
                </Avatar>
            </HeaderItem>
        </section>
    );
};

HeaderLayout.defaultProps = {
    filterHandler: function () {
    }
}

export default HeaderLayout;