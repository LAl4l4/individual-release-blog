import {useState} from "react";
import './PgCtrl.css';


export default function PageCtrl({isup}) {
    const [open, setOpen] = useState(false);
    const [pagenum, setnum] = useState(0);

    return (
        <div id={"background" + (isup? "up" : "")}>

        </div>
    );
}