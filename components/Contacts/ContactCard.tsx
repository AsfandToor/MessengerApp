export default function ContactCard() {
    return (
        <a href="#" className="filterMembers all online contact" data-toggle="list">
            <img className="avatar-md" src="dist/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar" />
            <div className="status">
                <i className="material-icons online">fiber_manual_record</i>
            </div>
            <div className="data">
                <h5>Janette Dalton</h5>
                <p>Sofia, Bulgaria</p>
            </div>
            <div className="person-add">
                <i className="material-icons">person</i>
            </div>
        </a>
    )
}