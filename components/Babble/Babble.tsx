import ChatHeader from "../Chat/ChatHeader"
import ChatList from "../Chat/ChatList"
import ChatInput from "../Chat/ChatInput"
import Call from "../Chat/Call"

export default function Babble () {
    return (
        <div className="babble tab-pane fade" id="list-empty" role="tabpanel" aria-labelledby="list-empty-list">
            <div className="chat">
                <ChatHeader />
                <ChatList />
                <ChatInput />
            </div>
            <Call />
        </div>
    )
}