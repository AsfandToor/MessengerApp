export default function ChatRequest () {
    return (
        <div className="content empty">
            <div className="container">
                <div className="col-md-12">
                    <div className="no-messages request">
                        <a href="#"><img className="avatar-xl" src="dist/img/avatars/avatar-female-6.jpg" data-toggle="tooltip" data-placement="top" title="Louis" alt="avatar" /></a>
                        <h5>Louis Martinez would like to add you as a contact. <span>Hi Keith, I'd like to add you as a contact.</span></h5>
                        <div className="options">
                            <button className="btn button"><i className="material-icons">check</i></button>
                            <button className="btn button"><i className="material-icons">close</i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}