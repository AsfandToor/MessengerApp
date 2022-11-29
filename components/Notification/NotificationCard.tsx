export default function NotificationCard() {
  return (
    <a href="#" className="filterNotifications all latest notification" data-toggle="list">
        <img className="avatar-md" src="dist/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
        <div className="status">
            <i className="material-icons online">fiber_manual_record</i>
        </div>
        <div className="data">
            <p>Janette has accepted your friend request on Swipe.</p>
            <span>Oct 17, 2018</span>
        </div>
    </a>
  )
}
