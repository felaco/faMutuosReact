import React, {KeyboardEvent}  from 'react';
import './search-input.scss';
import SearchIcon from "../../icons/search-icon/search-icon";

interface SearchInputProps {
    placeholder?: string,
    value?: string,
    changeHandler?: (e: KeyboardEvent<HTMLInputElement>) => void
}

const SearchInput = (props: SearchInputProps) => {
    return (
        <div className='search-input'>
            <input onKeyPress={props.changeHandler} placeholder={props.placeholder}/>
            <SearchIcon/>
        </div>
    );
};

SearchInput.defaultProps = {
    changeHandler: () => null
}

export default SearchInput;