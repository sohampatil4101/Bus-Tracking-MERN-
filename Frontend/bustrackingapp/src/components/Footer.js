import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="fcontainer">
                    <div className="footer-content">
                        <ul className="footer-content__1">
                            <li>Contact Us</li>
                            <li className='footer-content__1__para'>Our offices</li>
                            <li className='footer-content__1__para_add-1'>
                                F-611 Tower 2, Seawoods Grand Central,
                                Navi Mumbai 400706 India
                                Corporate Identification Number (CIN): U72900MH2014PTC254181
                            </li>
                            <li className='footer-content__1__para_add-2'>
                                100 Peck Seah street, #08-14 PS100,
                                Singapore 079333
                                Unique Entity Number (UEN): 201438158H
                                Email: contact@transitgo.com</li>
                        </ul>
                        <ul className="footer-content__2">
                            <li className='footer-content__2__links'>Social Connect</li>
                            <li className='footer-content__2__links-icons'>
                                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            </li>
                        </ul>
                        <ul className="footer-content__3">
                            <li><a href="#">Terms and Conditions </a></li>
                            <li>Copyright Â© TransitGo Mobility Private Limited. All Rights Reserved.</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer