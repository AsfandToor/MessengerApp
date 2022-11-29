import ContactBtns from "./ContactBtns"
import ContactCard from "./ContactCard"

export default function Contacts() {
    return (
        <div className="tab-pane fade" id="members">
            <div className="search">
                <form className="form-inline position-relative">
                    <input type="search" className="form-control" id="people" placeholder="Search for people..." />
                    <button type="button" className="btn btn-link loop"><i className="material-icons">search</i></button>
                </form>
                <button className="btn create" data-toggle="modal" data-target="#exampleModalCenter"><i className="material-icons">person_add</i></button>
            </div>
            <ContactBtns />
            <div className="contacts">
                <h1>Contacts</h1>
                <div className="list-group" id="contacts" role="tablist">
                    {/* Contacts List */}
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                </div>
            </div>
        </div>
    )
}