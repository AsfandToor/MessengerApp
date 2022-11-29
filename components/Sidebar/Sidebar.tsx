import Contacts from "../Contacts/Contacts"
import Discussions from "../Discussions/Discussions"
import Notification from "../Notification/Notification"
import Settings from "../Settings/Settings"

export default function Sidebar () {
    return (
        <div className="sidebar" id="sidebar">
            <div className="container">
                <div className="col-md-12">
                    <div className="tab-content">
                        <Contacts />
                        <Discussions />
                        <Notification />
                        <Settings />
                    </div>
                </div>
            </div>
        </div>
    )
}