import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Layout.css'
import DashBoard from './components/DashBoard'

const Layout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };
    return (
        <>
            <div className="sidebar-content">
                <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
                    <ul className="sidebar__links">

                        <li>
                            {" "}
                            <Link className="dashboard-link" to="/dashboard">
                                <i class="fa fa-dashboard"></i>  Dashboard
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="manage-link" to="/manage">
                                <i class="fa fa-bus"></i> Manage Bus
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="terminal-link" to="/terminal">
                                <i class="fa fa-compass"></i> Manage Terminal
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="schedule-link" to="/schedule">
                                <i class="fa fa-calendar"></i>  Manage Schedule
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="bookings-link" to="/bookings">
                                <i class="fa fa-book"></i> List Bookings
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="tickets-link" to="/tickets">
                                <i class="fa fa-ticket"></i> Tickets
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="payments-link" to="/payments">
                                <i class="fa fa-dollar"></i>  Payments List
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="user-link" to="/user">
                                <i class="fa fa-person"></i>  User Management
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className={`toggle-button ${collapsed ? 'collapsed' : ''}`} onClick={toggleSidebar}>
                    {collapsed ? <i className='fa fa-times'></i> : <i className='fa-solid fa-bars-staggered'></i>}
                </button>
            </div>
            <DashBoard />
        </>
    )
}

export default Layout