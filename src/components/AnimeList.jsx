import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AnimeList = () => {

    const [anime, setAnime] = useState([])

    useEffect(() => {
        loadAnime()
    }, [])

    const loadAnime = async () => {
        const result = await axios.get("http://localhost:8080/anime")
        setAnime(result.data)
    }
    return (
        <div>
            <h1>Онгоинги</h1>
            <div className='d-flex flex-wrap'>
                {anime.map((anime) => (
                    <div className='m-3 my-5'>
                        <div className='container d-flex align-items-center'>
                            <img src={anime.img} alt={anime.link} className="rounded" style={{ width: "70px", height: "100px" }} />
                            <span className='mx-5'>
                                <h5><b>{anime.name}</b></h5>
                                <h5><b>Кол-во серий:</b> {anime.episodes}</h5>
                                <h5><b>Статус:</b> {anime.status}</h5>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimeList