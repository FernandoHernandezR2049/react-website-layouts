import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'

const Menu = () => {
    return (
        <aside className="MenuContainer">
            <h3 className="menu-title">Menu</h3>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><Link className='nav-link' to='/'>Home</Link></li>
                    <li className="nav-item"><Link className='nav-link' to='/columns-preview-card'>3 Columns preview card component</Link></li>
                </ul>
            </nav>
        </aside>
    )
}
export default Menu