import '../styles/TypingIndicator.css';

export default function TypingIndicator() {
    return (
        <div className={"message bot-message"}>
            <span className='typing-indicator-dot'></span>
            <span className='typing-indicator-dot'></span>
            <span className='typing-indicator-dot'></span>
        </div>
    );
}