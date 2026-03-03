import {Link} from "react-router";
import styled from "styled-components";

import {Window, Deco} from "./styling/WindowStyles.tsx";

export default function Nav() {
    const Nav = styled.nav`
        width: 30%;
        text-align: center;
        margin-right: 0.5vw;
        & ul {
            list-style-type: none;
            padding: 0;
        };
        & li { 
            width: 100%;
            &:hover { background-color:#d9d9d9 };
        };
        // TODO: go to office hours about current page color changing
    `;

    const NavLink = styled(Link)`
        display: block;
        padding: 1vh 0;
        color: black;
        text-decoration: none;
    `;

    return (
        <Nav>
            <Window>
                <Deco/>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/education">Education</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/games">Games</NavLink></li>
                    <li><NavLink to="/employment">Employment</NavLink></li>
                    <li><NavLink to="/involvement">Involvement</NavLink></li>
                    <li><NavLink to="/skills">Skills</NavLink></li>
                </ul>
            </Window>
        </Nav>
    );
}