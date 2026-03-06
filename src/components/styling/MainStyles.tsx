import styled from "styled-components";
import {Link} from "react-router";

export const Main = styled.main`
    width: 70%;
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

export const MainLink = styled(Link)`
    color: black;
    font-style: italic;
`;

export const VBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1vh;
    height:fit-content;
    & p {
        padding: 0;
        font-size: calc(2px + max(1.5vh, 0.7vw));
    }
`;

export const HBox = styled.div`
    display: flex;
    height:fit-content;
    margin-bottom: 1vh;
    & img {
        height: 10vh;
        margin-right: 1vw;
        border-radius: 10px;
    };
    & a, i { font-size: calc(2px + max(1.3vh, 0.5vw)) };
    & a { margin-right: 0.3vw };
    @media screen and (max-width: 750px) { & img { height: 7vh }  };
`;

export const Tag = styled.div`
    font-size: calc(2px + max(1vh, 0.3vw));
    background-color: #d2d2d2;
    border-radius: 15px;
    width: fit-content;
    padding: 1px 5px;
    margin: 0.3vh 0.2vw 0.3vh 0;    /* no left padding */
    float: left;
    &:hover { background-color: #999999 };
`;