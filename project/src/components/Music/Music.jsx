// import musics from './Music.module.css';
import {NavLink} from 'react-router-dom';


const MusicItem = (props) => {
 let path = '/music/' + props.id

    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Music = (props) => {
    let musicElements = props.state.musicList.map(m =>
          <MusicItem id={m.id} name={m.name} />  
        )

    return (
        <div>
            Music <br></br>
            <ol>
                  {musicElements}
            </ol>
        </div>
    )
}

export default Music;