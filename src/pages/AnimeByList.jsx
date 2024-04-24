import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AnimeService from '../API/AnimeService'
import MyForm from '../components/MyForm'
import AnimeInfo from '../components/AnimeInfo'
import Navbar from '../components/Navbar'
import Episode from '../components/Episode'

const AnimeByList = () => {
    const params = useParams()
    const [anime, setAnime] = useState({})

    useEffect(() => {
        loadAnime()
    }, [])
    
    const loadAnime = async () => {
        const result = await AnimeService.getAnimeById(params.id)
        setAnime(result)
    }

  return (
    <div>
      <Navbar/>
      <MyForm body={<AnimeInfo anime={anime}/>} style={{width: "1250px", marginTop:"50px"}}/>
      <MyForm body={<Episode anime={anime}/>} style={{width: "1250px", marginTop:"50px"}}/>
    </div>
  )
}

export default AnimeByList