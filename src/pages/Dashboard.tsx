import React from "react";
import QuantityBox from "../components/DashboardComponents/QuantityBox";
import CurrentItemsTable from "../components/DashboardComponents/CurrentItemsTable";
import FinishedItemsTable from "../components/DashboardComponents/FinishedItemsTable";

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

        <section className="dashboardTable">
            <CurrentItemsTable/>
            <FinishedItemsTable/>
        </section>
        </>
    )
}