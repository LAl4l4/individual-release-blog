

export default function Icon({open}) {
    return (
        <div className={"login-icon-container" + (open ? "slide" : "")}>
            <img
                src="/image/icon.png"
                className="blog-icon" 
                alt="icon"
            />
        </div>
    );
}