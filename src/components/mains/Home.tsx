import {Link} from "react-router";
import styled from "styled-components";

import {Window, Deco, Content} from "../styling/WindowStyles.tsx";
import {Main} from "../styling/MainStyles.tsx";

const HomeLink = styled(Link)`
    color: black;
    font-style: italic;
`;

const HomeImage = styled.img`
    display: block;
    max-width: calc(30vw + 50px);
    border-radius: 10px;
    margin: 1vh auto 2vh;
`;

export default function Home() {
    return (
        <Main>
            <Window>
                <Deco/>
                <Content>
                    <h1><u>Home</u></h1>
                    <HomeImage src="../../../public/grace.jpg" alt="Grace Desrochers sitting on a railing in front of a lake on a sunny day"/>
                    <p>Grace Desrochers (she/her) is a third-year student majoring in Computer Science at Boston
                        University. She has a passion for making games and other interactive experiences as a way of
                        storytelling and creative expression.</p>
                    <br/>
                    <p>This site provides an online way to view her resume, including her <em><HomeLink to="/education">educational background</HomeLink></em>, <em><HomeLink to="/projects">projects</HomeLink></em>, and <em><HomeLink to="/games">games</HomeLink></em>.</p>
                </Content>
            </Window>
        </Main>
    );
}