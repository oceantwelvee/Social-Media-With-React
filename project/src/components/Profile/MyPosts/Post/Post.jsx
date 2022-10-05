import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (         
           <div className={s.item}>
        <img src="https://m.media-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_.jpg"/>
             {props.message} 
             <div>
                <span>Like</span>{props.likesCount}
                </div>
           </div>
            
    );
}

export default Post;