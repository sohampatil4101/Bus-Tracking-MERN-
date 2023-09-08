import React from 'react'
import '../styles/How.css'
// import ReactPlayer from 'react-player'
import HowImg from '../images/ticket-main-how-section.jpg'

const How = () => {
    return (
        <>
            <section id="how">
                <div className="how-container">
                    <div className="how-main-header">
                        <h2 className="how-header">
                            How To Monitor Your
                        </h2>
                        <h1 className="how-subheader">
                            Bus Live
                        </h1>
                    </div>
                    <div className="how-content">
                        <div className="how-img-container">
                            {/* <ReactPlayer className='video-guide' url={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} controls={true} /> */}
                            <img src={HowImg} alt="how-section-img" />
                        </div>
                        <div className="how-icons-container">
                            <div className="how-icons-content">

                                <div className="how-icon">
                                    <i className='fas fa-location-arrow'></i>
                                    <div className="how-icon-content">In the search field, type in the route number or name, then click the search button.</div>
                                </div>

                                <div className="how-icon">
                                    <i class="fa-solid fa-route"></i>
                                    <div className="how-icon-content">Choose your route for real-time bus tracking to stay updated on arrivals and departures.</div>
                                </div>
                                <div className="how-icon"><i className='far fa-clock'></i>
                                    <div className="how-icon-content">Tap on any bus stop name to get the current arrival time of the bus at that location.</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default How