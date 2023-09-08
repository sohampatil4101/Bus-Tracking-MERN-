import React from 'react'
import CitiesItems from './CitiesItems'

const Cities = () => {
    return (
        <>
            <section id="cities">
                <div className="cities-container">
                    <div className="cities-header-main">
                        <div className="cities-header">
                            <h2 className='cities-main-header'>Cities Where You Can Download The</h2>
                            <h2 className='cities-main-subheader'>TransitGo App</h2>
                        </div>
                    </div>
                    <div className="cities-content">
                        <CitiesItems />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cities