import "./home.css"
import { Navbar } from "./navbar"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Cookies from "js-cookie"
import {Setup} from "./setup"
import {Gist} from "./gist"

export function Home() {
    return (
        <div className="home-main">
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IsVerified/>}/>
                    <Route path="/login" element={<Setup/>}/> 
                    <Route path="/home" element={<Gist/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function IsVerified() {
    return Cookies.get().isVerified ? (<Navigate to="/home" />) : (<Navigate to="/login"/>)
}