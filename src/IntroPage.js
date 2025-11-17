import './IntroPage.css';


export default function Intro({pagenum}) {
    let id = "Intromain";

    if (pagenum > 0) {
        id = "Intromain"
    } else if (pagenum === 0) {
        id = "Intromainup";
    }
    

    return (
        <div class={id}
        >
            <article id="introarticle">
                This is an introductory blog <br />
                about my journey learning web development.
            </article>
        </div>
    );
}