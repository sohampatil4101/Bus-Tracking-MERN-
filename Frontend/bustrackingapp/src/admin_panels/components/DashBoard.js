import React from 'react'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'
import './DashBoard.css'

const DashBoard = () => {
    return (
        <>
            <div className="dashboard-container">
                <div className="dash-content">
                    <h1>Dashboard</h1>
                    <div className="dashboard-cards">
                        <div className="card-elements">
                            <div className="card-content yellow">
                                <div className="card-main-content">
                                    <Link className='card-link' to='/login/booking'>pending bookings</Link>
                                    <h2 className='card-num'>6</h2>
                                </div>
                                <i className='fa fa-spinner'></i>
                            </div>
                            <div className="card-content blue">
                                <div className="card-main-content">
                                    <Link className='card-link' to='/login/tickets'>total tickets sold</Link><br />
                                    <h2 className='card-num'>11</h2>
                                </div>
                                <i className='fa fa-qrcode'></i>
                            </div>
                            <div className="card-content red">
                                <div className="card-main-content">
                                    <Link className='card-link' to='/login/payments'>payments list</Link><br />
                                    <h2 className='card-num'>12</h2>
                                </div>
                                <i className='fa fa-dollar'></i>
                            </div>
                            <div className="card-content yellow">
                                <div className="card-main-content">
                                    <Link className='card-link' to='/login/terminal'>total terminals</Link><br />
                                    <h2 className='card-num'>13</h2>
                                </div>
                                <i className='fa fa-road'></i>
                            </div>
                            <div className="card-content blue">
                                <div className="card-main-content">
                                    <Link className='card-link' to='/login/schedules'>available schedules</Link><br />
                                    <h2 className='card-num'>24</h2>
                                </div>
                                <i className='fa fa-calendar'></i>
                            </div>
                            <div className="card-content red">
                                <div className="card-main-content">
                                    <Link className='card-link' to='/login/manage'>avaiable bus</Link><br />
                                    <h2 className='card-num'>9</h2>
                                </div>
                                <i className='fa fa-bus'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard