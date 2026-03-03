import { createRoot } from "react-dom/client";
import styled from "styled-components";

import App from "./App.tsx";

const Background = styled.div`
    background-image: url("../public/bgtile.png");
    background-position: 75px;
    background-repeat: repeat;
    width: 100vw;
    height: 100vh;
`;

createRoot(document.getElementById('root')!).render(<Background><App /></Background>)
