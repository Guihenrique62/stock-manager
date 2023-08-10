import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";

export default function RouterLayout(){

    return (
        <>
            <HeaderComponent/>
            <Outlet/>
        </>
    )
}