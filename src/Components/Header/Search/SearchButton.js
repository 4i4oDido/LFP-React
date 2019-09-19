import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchButton = (props)=> {
    return (
        <div className="SearchButton" onClick={props.btnClicked}>
            <FontAwesomeIcon icon={faSearch} />
        </div>
    )
}

export default SearchButton;