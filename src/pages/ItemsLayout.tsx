import React from "react";
import { Link, Outlet } from "react-router-dom";
import './ItemsLayout.scss'

export default function ItemsLayout(){


    return (
        <main className="main-items">
            <h1 className="stock-item-title">Stock Items</h1>
            <div className="tabs">
                <Link to='/items' className="tabs-link tab-link-active">Items</Link>
                <Link to='/items/new' className="tabs-link">Novo Item</Link>
            </div>
            <Outlet/>
        </main>
    )
}