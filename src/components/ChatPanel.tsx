import Message, {MessageProps} from "./Message";
import {useState} from "react";
import MessageInput from "./MessageInput";


export default function ChatPanel() {
    const testMessages = [{id: 1, text: "Hello!", isUserMessage: false}, {
        id: 2,
        text: "Hi there!",
        isUserMessage: true
    }, {id: 3, text: "Welcome to the chatbot. I hope you enjoy it :)", isUserMessage: false}]
    const [messages, setMessages] = useState<MessageProps[]>(testMessages)

    const handleSubmitMessage = (message: string) => {
        const nextId = messages[messages.length - 1].id + 1;
        const newMessages = messages.map(message => message).concat({
            id: nextId,
            text: message,
            isUserMessage: true
        }, {id: nextId + 1, text: message, isUserMessage: false});
        setMessages(newMessages);
    }

    return (
        <div className="chat-panel">
            <div className="messages-container">
                {messages.map(message => <Message key={message.id} {...message}/>)}
            </div>
            <MessageInput submitMessage={handleSubmitMessage}/>
        </div>
    );
}

