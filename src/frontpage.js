import './Frontpage.css';
import { useState } from "react";


export default function Frontpage() {
    return (
        <div className="frontpage-background">
            
            <FrontImg />
        </div>
    );
}

function FrontImg() {
    const [open, setOpen] = useState(false);

    return (
        <div 
            className="frontpage-container"
            onClick = {()=>setOpen(!open)}
        >
            
            <img
            src="/image/backgroundtwo.png"
            className={"frontpage-img" + (open ? "slide" : "")}
            alt="front"

            />
            <FrontArrow />
        </div>
    )
}

function FrontArrow() {
    return (
        <img    
            src="/image/Arrow.png"
            id="arrow"
            alt="front"
        />
    )
}
