import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import React from "react";
import FooterComponent from "../components/footerComponent/FooterComponent";

export default function RouterLayout(){

    return (
        <>
            <HeaderComponent/>
            <main>
                 <Outlet/>
            </main>
            <FooterComponent/>
        </> 
    )
}