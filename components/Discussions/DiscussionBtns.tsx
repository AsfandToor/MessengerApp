export default function DiscussionBtns () {
    return (
        <div className="list-group sort">
            <button className="btn filterDiscussionsBtn active show" data-toggle="list" data-filter="all">All</button>
            <button className="btn filterDiscussionsBtn" data-toggle="list" data-filter="read">Read</button>
            <button className="btn filterDiscussionsBtn" data-toggle="list" data-filter="unread">Unread</button>
        </div>	
    )
}