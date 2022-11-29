import ChatCard from "./ChatCard"
import ChatDate from "./ChatDate"
import EmptyChat from "./EmptyChat"

export default function ChatList () {
    return (
        <div className="content" id="content">
            <div className="container">
                <div className="col-md-12">
                    <ChatDate />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                </div>
            </div>
        </div>
    )
}