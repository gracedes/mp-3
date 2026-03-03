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
    @media screen and (max-width: 1400px) { #wrapper { width: 80vw } }
`;

function Root() {
    return (
        <Wrapper>
            <Header/>
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
            </Routes>
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
