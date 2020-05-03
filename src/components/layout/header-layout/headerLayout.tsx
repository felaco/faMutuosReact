import React from 'react';
import './headerLayout.scss';
import FilterIcon from "../../ui/icons/filter-icon/filterIcon";
import MdRipple from "../../ui/buttons/md-ripple/mdRipple";
import FaButton from "../../ui/buttons/faButton/faButton";
import HeaderItem from "./header-item/headerItem";
import SearchInput from "../../ui/inputs/search-input/searchInput";

const HeaderLayout = () => {
    return (
        <section className='header-layout'>
            <HeaderItem alignLeft>Fondos Mutuos Chilenos más rentables</HeaderItem>
            <HeaderItem><p>F</p></HeaderItem>
            <HeaderItem>
                <FaButton>
                    <FilterIcon/>
                </FaButton>
            </HeaderItem>

            <HeaderItem>
                <SearchInput/>
            </HeaderItem>
        </section>
    );
};

export default HeaderLayout;