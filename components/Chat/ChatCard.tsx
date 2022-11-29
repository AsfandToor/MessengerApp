export default function () {
    return (
        <div className="message">
            <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar" />
            <div className="text-main">
                <div className="text-group">
                    <div className="text">
                        <p>We've got some killer ideas kicking about already.</p>
                        {/* If Attachment Available */}
                        <div className="attachment">
                            <button className="btn attach"><i className="material-icons md-18">insert_drive_file</i></button>
                            <div className="file">
                                <h5><a href="#">Tenacy Agreement.pdf</a></h5>
                                <span>24kb Document</span>
                            </div>
                        </div>
                    </div>
                </div>
                <span>09:46 AM</span>
            </div>
        </div>
    )
}