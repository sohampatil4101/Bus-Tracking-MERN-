import React from 'react'
import { citiesData } from './citiesData'
import { Link } from 'react-router-dom'

const CitiesItems = () => {
    return (
        <>
            {citiesData.map((city) => (
                <div className="cities_Boxes" key={city.key} >
                    <div className="img-container">
                        <Link to='/try'>
                            <img src={city.img} alt='city-img' /></Link>
                    </div>
                    <div className="city-name">
                        <h4 className="city-name-bold">{city.name}</h4>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CitiesItems