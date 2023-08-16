import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import React from "react";

export default function RouterLayout(){

    return (
        <>
            <HeaderComponent/>
            <div className="ousaj">
                 <Outlet/>
            </div>
           
        </>
    )
}