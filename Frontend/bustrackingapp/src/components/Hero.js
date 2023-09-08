import React from 'react'
import '../styles/Hero.css'
import HeroImg from '../images/main-hero_img.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <section id="hero">
                <div className="container">
                    <div className="hero-container">
                        <div className="hero-img">
                            <img src={HeroImg} alt="main-img" />
                        </div>
                        <div className="hero-text">
                            <h2 className='hero_text_header'>
                                Never Miss Another Bus!
                            </h2>
                            <h1 className='hero-text_subheader'>
                                SMARTER WAY TO TRAVEL
                            </h1>
                            <p className="hero-text_para">
                                Track my bus feature enables our on-the-go customers and their families to keep track of the bus location. You can track your bus on a map and use the information to plan your commute to the boarding point and to get off at the right stop.
                            </p>
                            <div className="hero__links">
                                <Link to='/app' className='download_app'>
                                    TransitGo App
                                </Link>
                                <Link to='/try' className='try-link'>
                                    Try TransitGo
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero