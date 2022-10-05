import React from "react";
import friendsStyle from './FriendsItem.module.css';
import { NavLink } from "react-router-dom";

const FriendsItem = (props) => {
    let path = '/friends/' + props.id;

    return (
            <div className={friendsStyle.list}>
              
              
               <NavLink to={path}>{props.name}</NavLink>
            
            
            
            </div>
    )
}

export default FriendsItem;