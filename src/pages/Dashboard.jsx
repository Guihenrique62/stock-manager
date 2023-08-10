import React from "react";
import QuantityBox from "../components/DashboardComponents/QuantityBox";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";

export default function Dashboard(){

    return (
        <div className="containerDashboard">
            <HeaderComponent/>
            <h2>Dashboard</h2>
            <QuantityBox title='teste' quantity='125'/>
            <QuantityBox title='343kj3rlkwej' quantity='125'/>
            <QuantityBox title='teste' quantity='125'/>
            <QuantityBox title='teste' quantity='125'/>

        </div>
    )
}