import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import '../styles/Layout.css'
import DashBoard from './components/DashBoard'
import SideBar from './components/SideBar'

const Layout = () => {

    return (
        <>
            <SideBar />
            <DashBoard />
            <Routes>
                <Route path='/login' element={<Layout />}>
                    <Route path='manage' element={<DashBoard />} />
                    <Route path='terminal' element={<DashBoard />} />
                    <Route path='schedule' element={<DashBoard />} />
                    <Route path='bookings' element={<DashBoard />} />
                    <Route path='tickets' element={<DashBoard />} />
                    <Route path='payments' element={<DashBoard />} />
                    <Route path='user' element={<DashBoard />} />
                </Route>
            </Routes>
        </>
    )
}

export default Layout