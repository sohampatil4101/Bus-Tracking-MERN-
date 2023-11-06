import React, { useState } from 'react'
import axios from 'axios';

const Contact = () => {
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        text: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData(prevState => ({ ...prevState, [name]: value }))
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/contacts", contactData);
            alert("Contact info sent successfully");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>            <section className="contact">
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-form">
                        <form onSubmit={onSubmit}>
                            <input name='name' type="text" placeholder='Your Name' className='name' onChange={handleChange} />
                            <input name='email' type="email" placeholder='Your Email' className='email' onChange={handleChange} />
                            <input name='subject' type="text" placeholder='Your Subject' className='subject' onChange={handleChange} />
                            <input name='phone' type="text" placeholder='Your PhoneNumber' className='phone' onChange={handleChange} />
                            <textarea name="text" id="textarea" cols="30" rows="10" placeholder='Your Message' onChange={handleChange}></textarea>
                            <button type='submit'>Send a message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact