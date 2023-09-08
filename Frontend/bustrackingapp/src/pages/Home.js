import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import WhyUs from '../components/WhyUs'
import How from '../components/How'
import Cities from '../components/cities'

const Home = () => {
    return (
        <>
            <Hero />
            <WhyUs />
            <How />
            <Cities />
            <Footer />
        </>
    )
}

export default Home