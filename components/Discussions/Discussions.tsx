import DiscussionBtns from "./DiscussionBtns"
import DiscussionCard from "./DiscussionCard"

export default function Discussions() {
    return (
        <div id="discussions" className="tab-pane fade active show">
            <div className="search">
                <form className="form-inline position-relative">
                    <input type="search" className="form-control" id="conversations" placeholder="Search for conversations..." />
                    <button type="button" className="btn btn-link loop"><i className="material-icons">search</i></button>
                </form>
                <button className="btn create" data-toggle="modal" data-target="#startnewchat"><i className="material-icons">create</i></button>
            </div>
            <DiscussionBtns />
            <div className="discussions">
                <h1>Discussions</h1>
                <div className="list-group" id="chats" role="tablist">			
                    {/* Discussions List */}
                    <DiscussionCard />
                    <DiscussionCard />
                    <DiscussionCard />
                </div>
            </div>
        </div>
    )
}