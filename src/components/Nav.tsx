import {Link} from "react-router";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/employment">Employment</Link></li>
                <li><Link to="/involvement">Involvement</Link></li>
                <li><Link to="/skills">Skills</Link></li>
            </ul>
        </nav>
    );
}