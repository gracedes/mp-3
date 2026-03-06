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
        border: solid 1px cyan;
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