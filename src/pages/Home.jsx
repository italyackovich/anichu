import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import MyForm from '../components/MyForm'
import AnimeList from '../components/AnimeList'

const Home = () => {

  return (
    <div>
      <Navbar/>
      <MyForm body={<AnimeList/>} style={{width: "1250px", marginTop:"50px"}}/>
    </div>
  )
}

export default Home