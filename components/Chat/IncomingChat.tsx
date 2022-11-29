export default function IncomingChat() {
    return (
        <div className="message">
            <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar" />
            <div className="text-main">
                <div className="text-group">
                    <div className="text typing">
                        <div className="wave">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}