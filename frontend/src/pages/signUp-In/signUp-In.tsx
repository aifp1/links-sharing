import React, { useState } from 'react'
import Login from '../login/login';
import Register from '../register/register';
import Dashboard from '../dashboard/dashboard';

const sign = () => {
    const [showRegistration, setShowRegistration] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [id, setId] = useState('')

    const handleToggle = () => {
        setShowRegistration(!showRegistration);
    }

    const handleLogin = (id: string) => {
        console.log("Id: ", id)
        setId(id);
        setLoggedIn(true)
    }

    // const handleLogout = () => {
    //     setLoggedIn(false)
    // }

  return (
    <div className='container'>
        {loggedIn ? (
            <div>
                {/* <button className='btn btn-primary' onClick={handleLogout}>Sign Out</button> */}
                <Dashboard userId={id}/>
            </div>
        ) : (
            <div>
                {showRegistration ? <Register/> : <Login onLogin={handleLogin}/>}
                <button className='btn btn-primary' onClick={handleToggle}>{showRegistration ? 'Sign-Up': 'Sign-In'}</button>
            </div>
        )}
    </div>
  )
}

export default sign;