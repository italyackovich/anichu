import React from 'react'
import DropDown from './DropDown'


const AnimeInfo = ({ anime }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <img src={anime.img} alt={anime.link} className="rounded" />
          <DropDown anime={anime}/>
        </div>
        <div className='col-md-5'>
          <h1>{anime.name}</h1>
          <h5 className='text-success'>{anime.link}</h5>
          <h5 className='my-3'>Статус: <span className='text-success'>{anime.status}</span></h5>
          <h5>Жанры: <span className='text-success'>{anime.genres?.map((genre) => genre.name).join(' ')}</span></h5>
          <h5 className='my-3'>Год выпуска: <span className='text-success'>{anime.date}</span></h5>
          <h5>Возрастной рейтинг: <span className='text-success'>{anime.ageRating}</span></h5>
        </div>
        <div className='my-5'>
          <h5>{anime.description}</h5>
        </div>
      </div>
    </div>
  )
}

export default AnimeInfo