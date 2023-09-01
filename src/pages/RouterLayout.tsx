import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import React from "react";
import FooterComponent from "../components/footerComponent/FooterComponent";
import ModalComponent from "../components/ModalComponent/ModalComponent";
import ModalUpdade from "../components/ModalComponent/ModalUpdade";
import useModal from "../hooks/useModal";

export default function RouterLayout(){

    
    return (
        <>
            <HeaderComponent/>
            <main>
                 <Outlet/>
            </main>
            <FooterComponent/>
            <ModalComponent ifUse={false}/>
            
        </> 
    )
}