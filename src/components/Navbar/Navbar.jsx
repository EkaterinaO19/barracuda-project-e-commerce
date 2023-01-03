import React from 'react';
import TopNavbar from "./TopNavbar/TopNavbar";
import BottomNavbar from "./BottomNavbar/BottomNavbar";
import CenterNavbar from "./CenterNavbar/CenterNavbar";

function Navbar(props) {
    return (
        <>
        <TopNavbar/>
        <CenterNavbar/>
        <BottomNavbar/>
        </>
    );
}

export default Navbar;