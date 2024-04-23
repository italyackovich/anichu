import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AnimeService from '../API/AnimeService'

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
        <img src={anime.img}/>
        <h1>{anime.name}</h1>
        <h2>{anime.description}</h2>
        <iframe
            width="640"
            height="384"
            src={anime.episodes?.[0]?.url ?? ''}
            frameborder="0"
            allowfullscreen></iframe>
    </div>
  )
}

export default AnimeByList