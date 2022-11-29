export default function DiscussionCard() {
    return (
        <a href="#list-chat" className="filterDiscussions all unread single active" id="list-chat-list" data-toggle="list" role="tab">
            <img className="avatar-md" src="dist/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
            <div className="status">
                <i className="material-icons online">fiber_manual_record</i>
            </div>
            <div className="new bg-yellow">
                <span>+7</span>
            </div>
            <div className="data">
                <h5>Janette Dalton</h5>
                <span>Mon</span>
                <p>A new feature has been updated to your account. Check it out...</p>
            </div>
        </a>
    )
}