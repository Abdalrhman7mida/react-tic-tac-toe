import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div className='navbar-nav'>
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/tic-tac-toe">
                        Tic-Tac-Toe
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;