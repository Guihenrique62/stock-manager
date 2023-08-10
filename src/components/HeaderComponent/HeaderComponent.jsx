import { Link, useLocation } from 'react-router-dom'
import './HeaderStyles.scss'

export default function HeaderComponent(){

    const { pathname } = useLocation()
    console.log(pathname)
    return(
        <header>
            <h1>REACT STOCK</h1>
            <div className="header-links">
                <Link to='/' className={`nav-link ${pathname !== "/items" ? "activeLink":''}`}>Inicio</Link>
                <Link to='/items' className={`nav-link ${pathname === "/items" ? "activeLink":''}`}>Itens</Link>
            </div>
        </header>
    )
}