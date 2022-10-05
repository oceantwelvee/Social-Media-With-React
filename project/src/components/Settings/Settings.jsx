import SettingsStyle from './Setting.module.css';
import SettingsItem from './SettingsItem/SettingsItem'
const Settings = (props) => {
  
    let settingsItemsElements = props.state.settingsList.map(s =>
            <SettingsItem id={s.id} name={s.name} />
        )

    return (
        <div>
            <ol>
               {settingsItemsElements} 
            </ol>
        </div>
    )
}

export default Settings;