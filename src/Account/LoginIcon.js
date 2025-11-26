import './LoginIcon.css';
import {useState, useRef} from 'react';

export default function Icon({open}) {
    const [hover, setHover] = useState(false);
    const hideTimer = useRef(null);

    
    function handleEnter() {
        // cancel hide timer if coming back
        clearTimeout(hideTimer.current);
        setHover(true);
    }

    function handleLeave() {
        // schedule delayed closing
        hideTimer.current = setTimeout(() => {
            setHover(false);
        }, 200); // 👈调这个时间
    }

    return (
        <div
            className={"login-icon-container" + (open ? "" : " center")}
            onMouseEnter={()=> open && handleEnter()}
            onMouseLeave={()=> open && handleLeave()}
            aria-haspopup="true"
        >
            <div className="icon-clip">
                <img
                    src="/image/profile.webp"
                    className="blog-icon" 
                    alt="profile"
                />
            </div>

            <div className={"icon-dropdown" + (hover ? " visible" : "")} role="menu">
                <button className="dropdown-item">Login</button>
                <button className="dropdown-item">Profile</button>
                <button className="dropdown-item">Settings</button>
            </div>
        </div>
    );
}