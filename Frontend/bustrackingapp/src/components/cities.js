import React from 'react'
import CitiesItems from './CitiesItems'
import '../styles/cities.css'
import { Link } from 'react-router-dom'

const Cities = () => {
    return (
        <>
            <section id="cities">
                <div className="cities-container">
                    <div className="cities-header-main">
                        <div className="cities-header">
                            <h2 className='cities-main-header'>Cities Where You Can</h2>
                            <h2 className='cities-main-subheader'>Live Track Buses</h2>
                        </div>
                    </div>
                    <div className="cities-content">
                        <CitiesItems />
                    </div>
                    <div className="more-btn-container">
                        <Link to='/try'> <button className='more-cities-btn'>More Cities <i className='fa-solid fa-angle-down'></i></button></Link></div>
                </div>
            </section>
        </>
    )
}

export default Cities