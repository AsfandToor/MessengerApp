export default function NotificationBtns() {
  return (
    <div className="list-group sort">
        <button className="btn filterNotificationsBtn active show" data-toggle="list" data-filter="all">All</button>
        <button className="btn filterNotificationsBtn" data-toggle="list" data-filter="latest">Latest</button>
        <button className="btn filterNotificationsBtn" data-toggle="list" data-filter="oldest">Oldest</button>
    </div>	
  )
}
