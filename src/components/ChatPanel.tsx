import Message from "./Message";
import {useState} from "react";
import MessageInput from "./MessageInput";


export default function ChatPanel() {
    const testMessages = ["Hello!", "Hi there"]
    const [messages, setMessages] = useState<string[]>(testMessages)

    const handleSubmitMessage = (newMessage: string) => {
        const newMessages = messages.map(message => message).concat(newMessage);
        setMessages(newMessages);
    }

    return (
        <div>
            <div>
                {messages.map(message => <Message text={message}/>)}
            </div>
            <MessageInput submitMessage={handleSubmitMessage}/>
        </div>
    );
}

