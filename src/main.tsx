import { createRoot } from "react-dom/client";
import styled from "styled-components";

import App from "./App.tsx";

// I use this file to provide the background image for the page
const Background = styled.div`
    background-image: url("/bgtile.png");
    background-position: 75px;
    background-repeat: repeat;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
`;

createRoot(document.getElementById('root')!).render(<Background><App /></Background>)
