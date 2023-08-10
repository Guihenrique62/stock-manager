import React from "react";
import QuantityBox from "../components/DashboardComponents/QuantityBox";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";

export default function Dashboard(){

    return (
        <>
        <h2 className="dashboardTitle">Dashboard</h2>
        <section className="containerDashboard">
            <QuantityBox title='teste' quantity='125'/>
            <QuantityBox title='343kj3rlkwej' quantity='125'/>
            <QuantityBox title='teste' quantity='125'/>
            <QuantityBox title='teste' quantity='125'/>
        </section>

        <section className="ListOfItemsContainer">
    
        </section>
        </>
    )
}