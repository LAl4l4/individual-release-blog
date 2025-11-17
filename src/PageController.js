import {useState} from "react";
import './PgCtrl.css';
import Intro from './IntroPage';

export default function PageCtrl({isup}) {
    const [pagenum, setnum] = useState(0);

    if (pagenum < 0) {
        setnum(0);
    } else if (pagenum > 3) {
        setnum(3);
    }


    return (
        <div id={"background" + (isup? "up" : "")}
        >
            <PageArrow
                onNext={()=>setnum(pagenum-1)}
                onPrev={()=>setnum(pagenum+1)}
            />
            <Intro pagenum={pagenum}/>
        </div>
    );
}

function PageArrow({onNext, onPrev}) {
    return (
        <div>
            <img
                id="uparrow"
                src="/image/whArrowup.png"
                alt="prev"
                onClick={()=>onNext()}
            />
            <img
                id="downarrow"
                src="/image/whArrowdown.png"
                alt="next"
                onClick={()=>onPrev()}
            />
        </div>
    );
}