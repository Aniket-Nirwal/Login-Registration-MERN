import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const RegistrationPage = () => {
  const [registrationData, setRegistrationData] = useState({
    username:'',
    password:''
  })
  const handleRegistrationChange = (e) => {
    const {name,value}= e.target
    setRegistrationData((prevData)=>({
      ...prevData,
      [name]:value,
    }))
  }

  const handleRegistrationSubmit = async(e) => {
    e.preventDefault()
    try{
      const response = await axios("http://localhost:8000/register", registrationData)
      console.log(response.data)
    }
    catch(error){
      console.log(error)
    }
    setRegistrationData({
      username:"",
      password:"",
    })
  }
  return (
    <div>
      <h1>Registration form</h1>
      <form action="" onSubmit={handleRegistrationSubmit}>
        <input type="text" name='username' placeholder='username' onChange={handleRegistrationChange} value={registrationData.username} required />
        <input type="password" name='password' placeholder='password' onChange={handleRegistrationChange} value={registrationData.password} required />
        <button type='submit'>Register</button>
        <p>Already Register?<Link to="/login">Login Here</Link></p>
      </form>
    </div>
  )
}

export default RegistrationPage