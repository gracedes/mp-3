import styled from "styled-components";

// this is the style for the window frame
export const Window = styled.div`
    height: 100%;
    background-color: white;
    padding: 0;
    border: 2px solid #999999;
    border-radius: 4px;
`;

// this provides the style for the grey bar at the top of each window...
const WinDeco = styled.div`
    height: 22px;
    width: 100%;
    background-color: #d2d2d2;
    border-radius: 2px 2px 0 0;
    
    & img {
        float: right;
        height: 100%;
        border-radius: 0 2px 0 0;
        margin: 0;
    }
`;
// ...which is then exported in one piece with the accompanying image for reduced repetition
export function Deco() {
    return (
        <WinDeco>
            <img src="/window.png" alt="decorative minimize, expand, and close icons"/>
        </WinDeco>
    );
}

// and this just provides the universal text padding for the interior content of each window
export const Content = styled.div`padding: 0 0.7vw`;