import styled from "styled-components";

export const Window = styled.div`
    height: 100%;
    background-color: white;
    padding: 0;
    border: 2px solid #999999;
    border-radius: 4px;
`;

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

export const Content = styled.div`padding: 0 0.7vw`;

export function Deco() {
    return (
        <WinDeco>
            <img src="/window.png" alt="decorative minimize, expand, and close icons"/>
        </WinDeco>
    );
}