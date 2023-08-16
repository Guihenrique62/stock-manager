import React from "react";
import { Link, Outlet } from "react-router-dom";
import './ItemsLayout.scss'

export default function ItemsLayout(){


    return (
        <main className="main-items">
            <h1>stock items</h1>
            <div className="tabs">
                <Link to='/items'>Items</Link>
                <Link to='/items/new'>Novo Item</Link>
            </div>
            <Outlet/>
        </main>
    )
}