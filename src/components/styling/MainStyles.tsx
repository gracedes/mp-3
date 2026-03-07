import styled from "styled-components";
import {Link} from "react-router";

// this file contains the general text formatting used across pages

// defines the main window size and also font sizes and padding
export const Main = styled.main`
    width: 70%;
    font-size: calc(2px + max(1.8vh, 1vw));
    & h1 {
        font-size: calc(2px + max(2.25vh, 1.5vw));
        text-align: center;
        margin-top: 15px;
    }
    & p { padding: 0 1.5vw; }
    // the window is just about the width of the screen when under 750px
    @media screen and (max-width: 750px) {
        width: 100%;
        height: 73vh;
        font-size: calc(2px + max(1.8vh, 1vw));
    };
    padding: 0.5vh 0.5vw;
`;

// just the styling for the black links
export const MainLink = styled(Link)`
    color: black;
    font-style: italic;
`;

// generic vertical flexbox
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

// generic *horizontal* flexbox
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

// the little tags you see under the project and game names
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

// and finally the horizontally spaced text used in Skills and Involvement
export const HText = styled.p` margin-right: 3vw `;