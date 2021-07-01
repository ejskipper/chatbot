import {useState} from "react";


export default function MessageInput({submitMessage}: { submitMessage: (message: string) => void }) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = e.target as HTMLTextAreaElement;
        setInputValue(target.value);

        target.style.height = '0px';
        target.style.height = Math.min(target.scrollHeight, 75) + "px";
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();

            inputValue && submitMessage(inputValue);
            setInputValue("");
        }
    }

    return (
        <div className="input-container">
            <textarea className="message-input" value={inputValue} onChange={e => handleChange(e)}
                      onKeyDown={e => handleKeyDown(e)}/>
        </div>
    );
}

