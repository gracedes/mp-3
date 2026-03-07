import {Calc, Buttons} from "./styling/CalcStyles.tsx"
import {HBox} from "./styling/MainStyles.tsx";
import {useState} from "react";
import styled from "styled-components";

// styling for the output field of the calculator, which uses props in order to determine the background color ^u^
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
    // useState is used for the numbers as well as the output
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0)
    const [output, setOutput] = useState(0);

    // basic operation functions just take the two numbers and send the result to the output useState
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
        // basic power for-loop w/ temp variable
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
                    {/* when the first number is changed, send that event's value to setFirstNumber */}
                    <input type={"number"} id={"firstNumber"} value={firstNumber} onChange={(e)=>setFirstNumber(Number(e.target.value))}/>
                </HBox>
                <HBox>
                    <label htmlFor="secondNumber">Second Number:</label>
                    {/* do the same as above for the second number */}
                    <input type={"number"} id={"secondNumber"} value={secondNumber} onChange={(e)=>setSecondNumber(Number(e.target.value))}/>
                </HBox>
            </div>
            <Buttons>
                {/* each button just calls it corresponding function on click, pretty simple */}
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
                {/* set the output */}
                <Output value={output}>{output}</Output>
            </Buttons>
        </Calc>
    );
}