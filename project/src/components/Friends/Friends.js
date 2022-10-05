import React from "react";
import friendsStyle from './Friends.module.css'
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props) => {
    let friendsElements = props.state.friendsList.map(f => 
            <FriendsItem name={f.name} id={f.id} />
        )


   

    return (
        <div className={friendsStyle.groups}>         
            {friendsElements}        
        </div>
    )
}

export default Friends;