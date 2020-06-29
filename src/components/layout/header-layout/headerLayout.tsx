import React from 'react';
import './headerLayout.scss';
import HeaderItem from "./header-item/headerItem";
import SearchInput from "../../ui/inputs/search-input/searchInput";
import { Avatar, Button, Tooltip } from "@material-ui/core";
import { MdFilterList } from "react-icons/all";

const HeaderLayout = () => {
    return (
        <section className='header-layout'>
            <HeaderItem alignLeft>Fondos Mutuos Chilenos más rentables</HeaderItem>
            <HeaderItem>
                <Tooltip title='Filtros'>
                    <Button>
                        <MdFilterList/>
                    </Button>
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

export default HeaderLayout;