import React from 'react'
import WhyUs from '../components/WhyUs'
import How from '../components/How'
import Cities from '../components/cities'
import Hero from './Hero'
import Footer from './Footer'
import Contact from './Contact'

const Home = () => {
    return (
        <>
            <Hero />
            <WhyUs />
            <How />
            <Cities />
            <Contact />
            <Footer />
        </>
    )
}

export default Home