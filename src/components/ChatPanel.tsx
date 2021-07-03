import Message, {MessageProps} from "./Message";
import {useEffect, useRef, useState} from "react";
import MessageInput from "./MessageInput";
import TypingIndicator from "./TypingIndicator";
import '../styles/ChatPanel.css';

export default function ChatPanel() {
    const [messages, setMessages] = useState<MessageProps[]>(testMessages);
    const [isTyping, setIsTyping] = useState(false);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({behavior: "smooth"});
        }

        const previousMessage = messages[messages.length - 1];
        if (previousMessage.isUserMessage) {
            setTimeout(function () {
                const newMessages = messages.map(message => message).concat({
                    id: previousMessage.id + 1,
                    text: previousMessage.text,
                    isUserMessage: false
                });
                setMessages(newMessages);
                setIsTyping(false);
                setIsSubmitDisabled(false);
            }, 1000);
        }
    }, [messages]);

    const handleSubmitMessage = (message: string) => {
        if (!isSubmitDisabled) {
            setIsSubmitDisabled(true);
            const nextId = messages[messages.length - 1].id + 1;
            const newMessages = messages.map(message => message).concat({
                id: nextId,
                text: message,
                isUserMessage: true
            });
            setMessages(newMessages);
            setIsTyping(true);
        }
    }

    return (
        <div className="chat-panel">
            <div className="messages-container">
                {messages.map(message => <Message key={message.id} {...message}/>)}
                {isTyping && <TypingIndicator/>}
                <div ref={bottomRef}></div>
            </div>
            <MessageInput isSubmitDisabled={isSubmitDisabled} submitMessage={handleSubmitMessage}/>
        </div>
    );
}

const testMessages = [{id: 1, text: "Hello!", isUserMessage: false}, {
    id: 2,
    text: "Hi there!",
    isUserMessage: true
}, {id: 3, text: "Welcome to the chatbot. I hope you enjoy it :)", isUserMessage: false}]
