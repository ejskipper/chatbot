import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './styles/App.css';
import ChatPanel from "./components/ChatPanel";
import {faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function App() {
    return (
        <div className="app">
            <div className="main-content">
                <div className="header">
                    <h1>chatbot</h1>
                    <div>
                        <a href="https://github.com/ejskipper" className="profile-link">
                            <FontAwesomeIcon icon={faGithubSquare}/>
                        </a>
                        <a href="https://uk.linkedin.com/in/ellen-skipper-29542a168" className="profile-link">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                    </div>
                </div>
                <ChatPanel/>
            </div>
        </div>
    );
}
