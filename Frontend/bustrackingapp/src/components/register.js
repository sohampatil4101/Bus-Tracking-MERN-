import React, { useState }from 'react'
import '../styles/index.css'
export default function Register() {
    const [credentials, setCredentials] = useState({
        name:"",
        email:"",
        password:""
    })
    const handleChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
        
    }
   
    const handleSubmit = async(e) =>{
        e.preventDefault()        
        const response = await fetch(`http://localhost:5000/api/user/`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password}),
          });
          const json = await response.json()
          console.log(json)
    }
  return (
    <>
    <div className="container">
    <form action="" onSubmit={handleSubmit}>
            <div className="box">
                <label >Name</label>
                <input value={credentials.name} type="text" name='name' id='name' onChange={handleChange}  />
            </div>
            <div className="box">
                <label >Email</label>
                <input value={credentials.email} type="text" name='email' id='email' onChange={handleChange}  />
            </div>
            <div className="box">
                <label >Password</label>
                <input value={credentials.password} type="password" name='password' id='password' onChange={handleChange}  />
            </div>
            <button type='submit' style={{'color': 'black', 'backgroundColor': '#27e727'}} >Register</button>
        </form>
    </div>
    </>
  )
}
