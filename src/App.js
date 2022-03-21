import React from "react";
import Navbar from "./components/Navbar"
import LeftNavbar from "./components/LeftNavbar"
import ThemeNavbar from "./components/ThemeNavbar"
import Main from "./components/Main"

function App() {
    return (
        <div className="app">
            <Navbar/>
            <LeftNavbar/>
            <ThemeNavbar/>
            <Main/>
        </div>
    )
}

export default App;