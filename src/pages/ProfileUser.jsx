import React from 'react'
import Navbar from '../components/Navbar'
import MyForm from '../components/MyForm'
import UserInfo from '../components/Profile/UserInfo'


const ProfileUser = () => {
  return (
    <div>
      <Navbar/>
      <MyForm body={<UserInfo/>} style={{width: "1250px", marginTop:"100px"}}/>
    </div>
  )
}

export default ProfileUser