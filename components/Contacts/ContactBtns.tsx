export default function ContactBtns() {
    return(
        <div className="list-group sort">
            <button className="btn filterMembersBtn active show" data-toggle="list" data-filter="all">All</button>
            <button className="btn filterMembersBtn" data-toggle="list" data-filter="online">Online</button>
            <button className="btn filterMembersBtn" data-toggle="list" data-filter="offline">Offline</button>
        </div>	
    )
}