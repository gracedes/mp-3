import styled from "styled-components";

import {Window, Deco, Content} from "../styling/WindowStyles.tsx";
import {Main, VBox, HBox, HText} from "../styling/MainStyles.tsx";

export default function Skills() {
    // this is just defined here because no other pages reference it
    const Center = styled.p` text-align: center `;

    return (
        <Main>
            <Window>
                <Deco/>
                <Content>
                    <h1><u>Skills</u></h1>
                    <VBox>
                        <Center><i>(ordered from most to least confident left to right)</i></Center>
                        <div><br/></div>
                        <div><p><b>Programming Languages:</b></p></div>
                        <HBox>
                            <HText>Rust</HText>
                            <HText>Python</HText>
                            <HText>Java</HText>
                            <HText>C++</HText>
                            <HText>C#</HText>
                        </HBox>
                        <div><p><b>Game Engines:</b></p></div>
                        <HBox>
                            <HText>Godot</HText>
                            <HText>Unity</HText>
                            <HText>Unreal Engine 5</HText>
                        </HBox>
                        <div><p><b>Other Skills:</b></p></div>
                        <HBox>
                            <HText>Linux</HText>
                            <HText>Git</HText>
                        </HBox>
                    </VBox>
                </Content>
            </Window>
        </Main>
    );
}