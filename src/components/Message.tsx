import '../styles/Message.css';

export interface MessageProps {
    id: number;
    text: string;
    isUserMessage: boolean;
}

export default function Message({id, text, isUserMessage}: MessageProps) {
    return (
        <div className={isUserMessage ? "message user-message" : "message bot-message"}>
            {text}
        </div>
    );
}
