import './Frontpage.css';
import { useState } from "react";
import PageCtrl from './PageController';


export default function Frontpage() {
    const [open, setOpen] = useState(false);

    return (
        <div className='frontpage-background'>
            <FrontImg 
                open={open}
                setopen={()=>setOpen(!open)}
            />
            <PageCtrl 
                isup={open}
            />
        </div>
    );
}

function FrontImg({open, setopen}) {

    return (
        <div 
            className={"frontpage-container" + (open ? "slide" : "")}
            onClick = {()=>setopen()}
        >
            <img
            src="/image/backgroundtwo.png"
            className="frontpage-img" 
            alt="front"

            />
            <FrontArrow />
        </div>
    )
}

function FrontArrow() {
    return (
        <img    
            src="/image/whArrowup.png"
            id="arrow"
            alt="front"
        />
    )
}
