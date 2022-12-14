export default function ChatHeader () {
    return (
        <div className="top">
            <div className="container">
                <div className="col-md-12">
                    <div className="inside">
                        <a href="#"><img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Keith" alt="avatar" /></a>
                        <div className="status">
                            <i className="material-icons online">fiber_manual_record</i>
                        </div>
                        <div className="data">
                            <h5><a href="#">Keith Morris</a></h5>
                            <span>Active now</span>
                        </div>
                        <button className="btn connect d-md-block d-none" name="1"><i className="material-icons md-30">phone_in_talk</i></button>
                        <button className="btn connect d-md-block d-none" name="1"><i className="material-icons md-36">videocam</i></button>
                        <button className="btn d-md-block d-none"><i className="material-icons md-30">info</i></button>
                        <div className="dropdown">
                            <button className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="material-icons md-30">more_vert</i></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <button className="dropdown-item connect" name="1"><i className="material-icons">phone_in_talk</i>Voice Call</button>
                                <button className="dropdown-item connect" name="1"><i className="material-icons">videocam</i>Video Call</button>
                                <hr />
                                <button className="dropdown-item"><i className="material-icons">clear</i>Clear History</button>
                                <button className="dropdown-item"><i className="material-icons">block</i>Block Contact</button>
                                <button className="dropdown-item"><i className="material-icons">delete</i>Delete Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}