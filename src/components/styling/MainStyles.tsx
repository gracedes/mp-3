import styled from "styled-components";

export const Main = styled.main`
    width: 70vw;
    font-size: calc(2px + max(1.8vh, 1vw));
    & h1 {
        font-size: calc(2px + max(2.25vh, 1.5vw));
        text-align: center;
        margin-top: 15px;
    }
    & p { padding: 0 1.5vw; }
    @media screen and (max-width: 750px) {
        width: 100%;
        height: 73vh;
        font-size: calc(2px + max(1.8vh, 1vw));
    };
    padding: 0.5vh 0.5vw;
`;