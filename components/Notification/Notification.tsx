import NotificationBtns from "./NotificationBtns"
import NotificationCard from "./NotificationCard"

export default function Notification () {
    return (
        <div id="notifications" className="tab-pane fade">
            <div className="search">
                <form className="form-inline position-relative">
                    <input type="search" className="form-control" id="notice" placeholder="Filter notifications..." />
                    <button type="button" className="btn btn-link loop"><i className="material-icons filter-list">filter_list</i></button>
                </form>
            </div>
            <NotificationBtns />
            <div className="notifications">
                <h1>Notifications</h1>
                <div className="list-group" id="alerts" role="tablist">
                    <NotificationCard />
                </div>
            </div>
        </div>
    )
}