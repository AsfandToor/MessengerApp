import SettingProfile from "./SettingProfile"
import Account from "./AccountSetting"
import Chat from "./ChatSetting"
import Notification from "./NotificationSetting"
import Connection from "./ConnectionSetting"
import Appearance from "./AppearanceSetting"
import Language from "./LanguageSetting"
import Privacy from "./PrivacySetting"

export default function Settings () {
    return (
        <div className="tab-pane fade" id="settings">			
            <div className="settings">
                <SettingProfile />
                <div className="categories" id="accordionSettings">
                    <h1>Settings</h1>
                    <Account />
                    <Chat />
                    <Notification />
                    <Connection />
                    <Appearance />
                    <Language />
                    <Privacy />        
                    <div className="category">
                        <a href="sign-in.html" className="title collapsed">
                            <i className="material-icons md-30 online">power_settings_new</i>
                            <div className="data">
                                <h5>Power Off</h5>
                                <p>Log out of your account</p>
                            </div>
                            <i className="material-icons">keyboard_arrow_right</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}