import './Frontpage.css';
import { useState } from "react";
import PageCtrl from './PageController';


export default function Frontpage() {
    return (
        
        <FrontImg />
        
    );
}

function FrontImg() {
    const [open, setOpen] = useState(false);

    return (
        <div 
            className={"frontpage-container" + (open ? "slide" : "")}
            onClick = {()=>setOpen(!open)}
        >
            <img
            src="./image/backgroundtwo.png"
            className="frontpage-img" 
            alt="front"

            />
            <FrontArrow />
            <PageCtrl isup={open}
            />
        </div>
    )
}

function FrontArrow() {
    return (
        <img    
            src="./image/Arrow.png"
            id="arrow"
            alt="front"
        />
    )
}
