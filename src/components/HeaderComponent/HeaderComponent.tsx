import { Link, useLocation } from 'react-router-dom'
import './HeaderStyles.scss'
import React from 'react'

export default function HeaderComponent(){

    const { pathname } = useLocation()
    return(
        <header>
            <h1><Link to='/' className='nav-link'>REACT STOCK</Link></h1>
            <div className="header-links">
                <Link to='/' className={`nav-link ${pathname !== "/items" ? "activeLink":''}`}>Inicio</Link>
                <Link to='/items' className={`nav-link ${pathname === "/items" ? "activeLink":''}`}>Itens</Link>
            </div>
        </header>
    )
}