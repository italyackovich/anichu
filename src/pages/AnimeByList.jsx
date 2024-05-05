import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyForm from '../components/MyForm'
import Navbar from '../components/Navbar'
import AnimeService from '../API/AnimeService'
import AnimeInfo from '../components/Anime/AnimeInfo'
import AnimeEpisode from '../components/Anime/AnimeEpisode'
import AnimeCommentList from '../components/Anime/Comments/AnimeCommentList'
import { CommContext } from '../context/CommContext'

const AnimeByList = () => {
    const params = useParams()
    const [anime, setAnime] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        loadAnime()
    }, [])
    
    const loadAnime = async () => {
        const result = await AnimeService.getAnimeById(params.id)
        setAnime(result)
        setComments(result.comments)
    }

  return (
    <div>
      <Navbar/>
      <MyForm body={<AnimeInfo anime={anime}/>} style={{width: "1250px", marginTop:"100px"}}/>
      <MyForm body={<AnimeEpisode episodes={anime.episodes}/>} style={{width: "1250px", marginTop:"30px"}}/>
      <CommContext.Provider value={{comments, setComments}}>
        <MyForm body={<AnimeCommentList/>} style={{width: "1250px", marginTop:"30px"}}/>
      </CommContext.Provider>
    </div>
  )
}

export default AnimeByList