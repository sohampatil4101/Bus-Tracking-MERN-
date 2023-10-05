import React from 'react'
import '../styles/WhyUs.css'

const WhyUs = () => {
    return (
        <>
            <section id="why">
                <div className="why-container">
                    <div className="why-content">
                        <div className="why-main-header">
                            <h2 className="why-header">
                                Why Wait In Line?
                            </h2>
                            <h1 className="why-subheader">
                                Never Stop at a Bus Stop Again
                            </h1>
                        </div>
                        <div className="why-icons-container">
                            <div className="icons-content">
                                <div className="why-icon"><div className="why-icon-container down-content">
                                    <i className='fa-solid fa-location-dot'></i></div>
                                    <div className="why-icon-content">Track your bus live</div>
                                </div>

                                <div className="why-icon"><div className="why-icon-container"><i className='far fa-clock'></i></div>
                                    <div className="why-icon-content">Get live arrival time of your bus at the bus stop</div>
                                </div>

                                <div className="why-icon"><div className="why-icon-container down-content"><i className='fa-solid fa-bus'></i></div>
                                    <div className="why-icon-content">Never miss your bus again</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs