import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    // for getting data and user is set in usercontextprovider jsx file
    const {user} = useContext(UserContext)
  
    if(!user) return <div>Please Login...</div>

    return <div>Welocme {user.username}</div>
}

export default Profile