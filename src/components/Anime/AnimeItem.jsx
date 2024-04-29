import React from 'react'
import { Link } from 'react-router-dom'

const AnimeItem = ({ anime }) => {
    return (
        <div className='m-3 my-5'>
            <div className='container d-flex align-items-center'>
                <img src={anime.img} alt={anime.link} className="rounded" style={{ width: "70px", height: "100px" }} />
                <span className='mx-5'>
                    <Link
                        className="text-white text-decoration-none fs-4"
                        style={{colorHover: "green"}}
                        to={`/anime/${anime.id}`}>
                        <b>{anime.name}</b>
                    </Link>
                    <h6>Кол-во серий: {anime.episodes.length}</h6>
                    <h6>Статус: {anime.status}</h6>
                </span>
            </div>
        </div>
    )
}

export default AnimeItem