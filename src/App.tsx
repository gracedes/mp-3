import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import styled from "styled-components";

import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/mains/Home.tsx";
import Education from "./components/mains/Education.tsx";

const Wrapper = styled.div`
    font-family: Helvetica, Arial, Veranda, sans-serif;
    font-optical-sizing: auto;
    width: 60vw;
    height: 100vh;
    margin: auto;
    padding: 1vh 0;
    @media screen and (max-width: 1400px) { width: 80vw }
    background: lightcoral;
`;

const Fbox = styled.div`
    display: flex;
    height: calc(78% - 4 * 0.5vh);
    width: 100%;
    background: #fff;
`;

const StyledHeader = styled(Header)`
    width: calc(100% - 2 * 0.5vw);
    height: 15vh;
`;
const StyledNav = styled(Nav)`
    width: 30%;
`;
const StyledMain = styled(Routes)`
    width: 70%;
`;

function Root() {
    return (
        <Wrapper>
            <StyledHeader/>
            <Fbox>
                <StyledNav/>
                <StyledMain>
                    <Route
                        path={"/"}
                        element={<Home/>}
                        // TODO: find better way to avoid having to put window and deco in each route
                    />
                    <Route
                        path={"/education"}
                        element={<Education/>}
                    />
                    <Route
                        path={"/projects"}
                        // element={<Projects/>}
                    />
                    <Route
                        path={"/games"}
                        // element={<Games/>}
                    />
                    <Route
                        path={"/employment"}
                        // element={<Employment/>}
                    />
                    <Route
                        path={"/involvement"}
                        // element={<Involvement/>}
                    />
                    <Route
                        path={"/skills"}
                        // element={<Skills/>}
                    />
                </StyledMain>
            </Fbox>
            <Footer/>
        </Wrapper>
    );
}

const router = createBrowserRouter([{path:"*",Component:Root}]);

export default function App() {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}
