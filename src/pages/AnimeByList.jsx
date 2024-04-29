import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyForm from '../components/MyForm'
import Navbar from '../components/Navbar'
import AnimeService from '../API/AnimeService'
import AnimeInfo from '../components/Anime/AnimeInfo'
import AnimeEpisode from '../components/Anime/AnimeEpisode'
import AnimeCommentList from '../components/Anime/Comments/AnimeCommentList'

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
      <MyForm body={<AnimeInfo anime={anime}/>} style={{width: "1250px", marginTop:"100px"}}/>
      <MyForm body={<AnimeEpisode anime={anime}/>} style={{width: "1250px", marginTop:"30px"}}/>
      <MyForm body={<AnimeCommentList comments={anime.comments}/>} style={{width: "1250px", marginTop:"30px"}}/>
    </div>
  )
}

export default AnimeByList