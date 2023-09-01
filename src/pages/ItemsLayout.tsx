import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import './ItemsLayout.scss'
import ModalUpdade from "../components/ModalComponent/ModalUpdade";
import useModal from "../hooks/useModal";

export default function ItemsLayout(){

    const {pathname} = useLocation()
    const modal = useModal()
    console.log("isOpen:",modal.updateModal)
    return (
        <main className="main-items">
            <h1 className="stock-item-title">Stock Itens</h1>
            <div className="tabs">
                <Link to='/items' className={pathname === '/items' ? 'tabs-link tab-link-active' : 'tabs-link'}>Todos os Itens</Link>
                <Link to='/items/new' className={pathname === '/items/new' ? 'tabs-link tab-link-active' : 'tabs-link'}>Novo Item</Link>
            </div>
            <Outlet/>
            <ModalUpdade isOpen={modal.updateModal} itemToUpdate={undefined}/>
        </main>
        
    )
}