import styled from "styled-components";

export const Calc = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1vh auto;
    text-align: center;
    width: 100%;
    & input {
        border: 2px solid #999999;
        border-radius: 4px;
        background-color: #d2d2d2;
        text-align: center;
        width: 20%;
        margin: 0 1vw;
    };
    & button {
        border: 2px solid #ff9696;
        border-radius: 2vh;
        background-color: #f6dddd;
        text-align: center;
        width: 30%;
        height: 4vh;
        margin: auto;
        &:hover { background-color: #ecb8b8 };
    }
`;

export const Buttons = styled.div`
    width: 50%;
    margin: auto;
`;