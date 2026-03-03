import styled from "styled-components";

export const Window = styled.div`
    background-color: white;
    margin: 0.5vh 0.5vw;
    padding: 0;
    border: 2px solid #999999;
    border-radius: 4px;
`;

export const WinDeco = styled.div`
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