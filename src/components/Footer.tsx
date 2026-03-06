import {Link} from "react-router";
import styled from "styled-components";

import {Window, Deco, Content} from "./styling/WindowStyles.tsx";

export default function Footer() {
    const Footer = styled.footer`
        height: 7vh;
        font-size: calc(11px + 0.5vw);
        text-align: center;
        & p {
            margin-top: 0.5vh;
            font-size: calc(2px + 1.75vh);
        };
        @media screen and (max-width: 750px) {
            & p {
                margin-top: 0.3vh;
                font-size: calc(2px + min(1.3vh, 3vw));
            }
        };
        padding: 0.5vh 0.5vw;
    `;

    return (
        <Footer>
            <Window>
                <Deco/>
                <Content>
                    <p>All Rights Reserved by Grace Desrochers <Link to={""}>Credits</Link> &copy;</p>
                </Content>
            </Window>
        </Footer>
    );
}