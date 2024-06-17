import React from 'react'
import { Link } from 'react-router-dom'

const CatalogItem = ({ anime }) => {
    const desc = anime.description.slice(0, 300)
    return (
        <div className='item m-3 my-5'>
            <Link
                className='link-light link-underline hover-element link-underline-opacity-0'
                to={`/anime/${anime.id}`}
            >
                <div className='container d-flex align-items-center'>
                    <img src={anime.img} alt={anime.link} className="rounded" style={{ width: "140px", height: "200px" }} />
                    <span className='mx-5'>
                        <h4 className='text-success'>{anime.name}</h4>
                        <h6 className='text-success'>Кол-во серий: <span className='text-light'>{anime.episodes.length}</span></h6>
                        <h6 className='text-success'>Статус: <span className='text-light'>{anime.status}</span></h6>
                        <h6 className='text-success'>Описание: <span className='text-light'>{desc}...</span></h6>
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default CatalogItem