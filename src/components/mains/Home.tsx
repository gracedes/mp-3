import styled from "styled-components";

import {Window, Deco, Content} from "../styling/WindowStyles.tsx";
import {Main, MainLink} from "../styling/MainStyles.tsx";

// this page uses a uniquely large image
const HomeImage = styled.img`
    display: block;
    max-width: 65%;
    border-radius: 10px;
    margin: 1vh auto 2vh;
    @media (max-width: 750px) {  max-width: 80%;  };
`;

export default function Home() {
    // the basic structure of each "main" is going to be the Main div which provides styling and scaling,
    // then a window border, then the window decoration, and finally below that the actual content.
    // most of the styling is handled in other files to reduce repetition and code verbosity
    return (
        <Main>
            <Window>
                <Deco/>
                <Content>
                    <h1><u>Home</u></h1>
                    <HomeImage src="/grace.jpg" alt="Grace Desrochers sitting on a railing in front of a lake on a sunny day"/>
                    <p>Grace Desrochers (she/her) is a third-year student majoring in Computer Science at Boston
                        University. She has a passion for making games and other interactive experiences as a way of
                        storytelling and creative expression.</p>
                    <br/>
                    <p>This site provides an online way to view her resume, including her
                        <em><MainLink to="/education">educational background</MainLink></em>,
                        <em><MainLink to="/projects">projects</MainLink></em>,
                        and <em><MainLink to="/games">games</MainLink></em>.</p>
                </Content>
            </Window>
        </Main>
    );
}