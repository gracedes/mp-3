import styled from 'styled-components';

import {Window, Deco, Content} from "./styling/WindowStyles.tsx";

export default function Header() {
    const Header = styled.header`
        & h1 { font-size: calc(2px + max(4vh, 3vw)) };
        & p {
            font-size: calc(2px + max(2.5vh, 1.5vw));
            font-style: italic;
        };
    `;

    return (
        <Window>
            <Deco/>
            <Content>
                <Header>
                    <h1>Grace Desrochers</h1>
                    <p>Welcome to my online resume!</p>
                </Header>
            </Content>
        </Window>
    );
}