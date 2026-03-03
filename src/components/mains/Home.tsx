import {Link} from "react-router";

export default function Home() {
    return (
        <main className="window">
            <h1><u>Home</u></h1>
            <img src="../../../public/grace.jpg" alt="Grace Desrochers sitting on a railing in front of a lake on a sunny day"/>
            <p>Grace Desrochers (she/her) is a third-year student majoring in Computer Science at Boston
                University. She has a passion for making games and other interactive experiences as a way of
                storytelling and creative expression.</p>
            <br/>
            <p>This site provides an online way to view her resume, including her <em><Link to="/education">educational background</Link></em>, <em><Link to="/projects">projects</Link></em>, and <em><Link to="/games">games</Link></em>.</p>
        </main>
    );
}