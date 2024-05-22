import React from 'react'
import { Link } from 'react-router-dom'
import "./AnimeItem.sass";

const AnimeItem = ({ anime }) => {
    return (
        <div className='item m-3 my-5'>
            <Link
                className='link-light link-underline hover-element link-underline-opacity-0'
                to={`/anime/${anime.id}`}
            >
                <div className='container d-flex align-items-center'>
                    <img src={anime.img} alt={anime.link} className="rounded" style={{ width: "70px", height: "100px" }} />
                    <span className='mx-5'>
                        {/* <Link
                            className="link-success link-underline-opacity-0 fs-4"
                            to={`/anime/${anime.id}`}>
                            <b>{anime.name}</b>
                        </Link> */}
                        <h4 className='text-success'>{anime.name}</h4>
                        <h6>Кол-во серий: {anime.episodes.length}</h6>
                        <h6>Статус: {anime.status}</h6>
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default AnimeItem