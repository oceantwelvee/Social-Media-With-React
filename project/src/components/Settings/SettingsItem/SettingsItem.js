import React from "react";
import { NavLink } from "react-router-dom";

const SettingsItem = (props) => {
    let path = '/settings/' + props.id

    return (
            <div>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
    )
}

export default SettingsItem;