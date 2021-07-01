import React from 'react';
import './styles/App.css';
import ChatPanel from "./components/ChatPanel";

export default function App() {
    return (
        <div className="App">
            <div className="content">
                <h1>chatbot</h1>
                <ChatPanel/>
            </div>
        </div>
    );
}
