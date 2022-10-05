import Preloader from '../../common/Preloader/Preloader';
import profileStyle from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
            <img src="https://st.depositphotos.com/1006706/2671/i/600/depositphotos_26715369-stock-photo-which-way-to-choose-3d.jpg" className={profileStyle.img} alt="" />
        </div>
        <div className={profileStyle.descriptionBlock}>
        <img src={props.profile.photos.large} alt=''/>
          ava + description
        </div>
        </div>
    )
}

export default ProfileInfo;