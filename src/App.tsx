import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import styled from "styled-components";

import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/mains/Home.tsx";
import Education from "./components/mains/Education.tsx";
import Projects from "./components/mains/Projects.tsx";
import Games from "./components/mains/Games.tsx";
import Employment from "./components/mains/Employment.tsx";
import Involvement from "./components/mains/Involvement.tsx";
import Skills from "./components/mains/Skills.tsx";

const Wrapper = styled.div`
    font-family: Helvetica, Arial, Veranda, sans-serif;
    font-optical-sizing: auto;
    width: 60vw;
    height: 100vh;
    margin: auto;
    @media screen and (max-width: 1400px) { width: 80vw };
    @media screen and (max-width: 750px) { width: 95vw };
`;

const Fbox = styled.div`
    display: flex;
    height: 78vh;
    width: 100%;
    @media screen and (max-width: 750px) {
        flex-direction: column;
        height: 83vh;
    };
`;

function Root() {
    return (
        <Wrapper>
            <Header/>
            <Fbox>
                <Nav/>
                <Routes>
                    <Route
                        path={"/"}
                        element={<Home/>}
                    />
                    <Route
                        path={"/education"}
                        element={<Education/>}
                    />
                    <Route
                        path={"/projects"}
                        element={<Projects/>}
                    />
                    <Route
                        path={"/games"}
                        element={<Games/>}
                    />
                    <Route
                        path={"/employment"}
                        element={<Employment/>}
                    />
                    <Route
                        path={"/involvement"}
                        element={<Involvement/>}
                    />
                    <Route
                        path={"/skills"}
                        element={<Skills/>}
                    />
                </Routes>
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
