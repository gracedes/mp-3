import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import {Route, Routes} from "react-router";

function App() {

    return (
        <>
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
            <Footer/>
        </>
    )
}

export default App
