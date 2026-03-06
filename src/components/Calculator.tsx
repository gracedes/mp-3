import {Calc, Buttons} from "./styling/CalcStyles.tsx"
import {HBox} from "./styling/MainStyles.tsx";
import {useState} from "react";
import styled from "styled-components";

export const Output = styled.div<{value: number}>`
    height: 4vh;
    width: 75%;
    background-color: ${(props) => props.value < 0 ? `#F39597`: `#d2d2d2`};
    border: 2px solid ${(props) => props.value < 0 ? `#EA4346`: `#999999`};
    border-radius: 1vh;
    text-align: center;
    padding-top: 0.75vh;
    margin: auto;
`;

export default function Calculator() {

    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0)
    const [output, setOutput] = useState(0);

    function addition() {
        setOutput(firstNumber + secondNumber);
    }
    function subtraction() {
        setOutput(firstNumber - secondNumber);
    }
    function multiplication() {
        setOutput(firstNumber * secondNumber);
    }
    function division() {
        setOutput(firstNumber / secondNumber);
    }
    function power() {
        let res = firstNumber;
        for (let i = 0; i < secondNumber - 1; i++) {
            res *= firstNumber;
        }
        setOutput(res);
    }
    function clearInputs() {
        setFirstNumber(0);
        setSecondNumber(0);
        setOutput(0);
    }

    return (
        <Calc>
            <div>
                <HBox>
                    <label htmlFor="firstNumber">First Number:</label>
                    <input type={"number"} id={"firstNumber"} value={firstNumber} onChange={(e)=>setFirstNumber(Number(e.target.value))}/>
                </HBox>
                <HBox>
                    <label htmlFor="secondNumber">Second Number:</label>
                    <input type={"number"} id={"secondNumber"} value={secondNumber} onChange={(e)=>setSecondNumber(Number(e.target.value))}/>
                </HBox>
            </div>
            <Buttons>
                <HBox>
                    <button onClick={addition}>+</button>
                    <button onClick={subtraction}>&minus;</button>
                    <button onClick={multiplication}>&lowast;</button>
                </HBox>
                <HBox>
                    <button onClick={clearInputs}>C</button>
                    <button onClick={power}>^</button>
                    <button onClick={division}>/</button>
                </HBox>
                <Output value={output}>{output}</Output>
            </Buttons>
        </Calc>
    );
}