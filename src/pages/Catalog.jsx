import React from 'react'
import Navbar from '../components/Navbar'
import MyForm from '../components/MyForm'
import AnimeList from '../components/Anime/AnimeList'

const Catalog = () => {
  return (
    <div>
        <Navbar/>
        <MyForm body={<AnimeList title={"Каталог"}/>} style={{width: "1250px", marginTop:"100px"}}/>
    </div>
  )
}

export default Catalog