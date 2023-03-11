import React, { useState, useEffect } from 'react'
 
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    let auth = localStorage.getItem("users")
    if (auth) {
      navigate("/login")
    }
  })

  const signUpData = async (e) => {
    console.log(name,email, pass)


    // ====================use fetch method===========
    let objectData = { name: name,email: email, password: pass }

    let result = await fetch('/signup', {
      method: 'POST',
      body: JSON.stringify(objectData),
      headers: {
        "content-type": "application/json"
      }
    })
    result = await result.json()
    console.log(result)
    if (result) {
      alert(`${result.message}`)
      navigate('/login')
    } 
  }
  return (
    <>
      <form className='register'>
        <h1>signup</h1>
        <input className='inputbox' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
        <input className='inputbox' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
        <input className='inputbox' type='password' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Enter Your Password' />
        <button className='btn' type='button' onClick={signUpData} >SignUp</button>
        <button className='logbtn' type='button'><Link to="/login">login</Link></button>
      </form>
    </>
  )
}