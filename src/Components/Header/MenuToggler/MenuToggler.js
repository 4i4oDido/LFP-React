import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const MenuToggler = (props)=> {
    return (
        <div className="MenuToggler" onClick={props.btnClicked}>
            <FontAwesomeIcon icon={faBars} />
        </div>
    )
};

export default MenuToggler;