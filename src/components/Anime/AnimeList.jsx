import React, { useEffect, useState } from 'react'
import AnimeItem from './AnimeItem'
import AnimeService from '../../API/AnimeService'

const AnimeList = () => {

    const [anime, setAnime] = useState([])

    useEffect(() => {
        loadAnime()
    }, [])

    const loadAnime = async () => {
        const result = await AnimeService.getAllAnime()
        setAnime(result)
    }
    return (
        <div>
            <h1>Онгоинги</h1>
            <div className='d-flex flex-wrap'>
                {anime.map((anime) => (
                    <AnimeItem key={anime.link} anime={anime}/>
                ))}
            </div>
        </div>
    )
}

export default AnimeList