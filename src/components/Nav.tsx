import {Link} from "react-router";
import styled from "styled-components";

import {Window, Deco} from "./styling/WindowStyles.tsx";

export default function Nav() {
    // the nav has much more interesting styling than the header and footer
    const Nav = styled.nav`
        width: 30%;
        padding: 0.5vh 0.5vw;
        text-align: center;
        & ul {
            list-style-type: none;
            padding: 0;
        };
        & li { 
            width: 100%;
            &:hover { background-color:#d9d9d9 };
        };
        // horizontal nav setup
        @media screen and (max-width: 750px) {
            width: 100%;
            height: 10vh;
            & ul {
                display: flex;
                justify-content: center;
                align-items: center;
                height: calc(9vh - 25px);
            }
            & li {
                float: left;
                width: fit-content;
                height: 100%;
            }
        };
    `;

    // the styling specifically for the links in the nav, this is needed to make them the proper height and width
    const NavLink = styled(Link)`
        display: block;
        padding: 1vh 0;
        color: black;
        text-decoration: none;
        @media screen and (max-width: 750px) {
            padding: 1.8vh 2vw;
            height: 100%;
            width: fit-content;
            font-size: calc(2px + 2vw);
        }
    `;

    return (
        <Nav>
            <Window>
                <Deco/>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/education">Education</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/games">Games</NavLink></li>
                        <li><NavLink to="/employment">Employment</NavLink></li>
                        <li><NavLink to="/involvement">Involvement</NavLink></li>
                        <li><NavLink to="/skills">Skills</NavLink></li>
                    </ul>
                </nav>
            </Window>
        </Nav>
    );
}