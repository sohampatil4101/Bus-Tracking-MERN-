import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {

    return (
        <>
            <nav>

                {/* desktop */}

                <div className="navbar">
                    <div className="navbar__img">
                        <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                            <p className='nav_brand__text'>Logo</p>

                            {/* <img src={Logo} alt="logo-img" /> */}
                        </Link>
                    </div>
                    <ul className="navbar__links">

                        <li>
                            {" "}
                            <Link className="app-link" to="/app">
                                TransitGo App
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="mobile-pass-link" to="/pass">
                                Mobile Pass
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="mobile-ticket-link" to="/ticket">
                                Mobile Ticket
                            </Link>
                        </li>
                    </ul>
                    {" "}
                    <Link className="try-link" to="/try" >
                        Try TransitGo
                    </Link>

                    <div className="navbar__buttons">
                        <Link className="navbar__buttons__sign-in" to="/login">
                            Sign In
                        </Link>
                        <Link className="navbar__buttons__register" to="/register">
                            Register
                        </Link>
                    </div>
                </div>
            </nav>
  <Outlet/>

        </>
    )
}

export default Navbar