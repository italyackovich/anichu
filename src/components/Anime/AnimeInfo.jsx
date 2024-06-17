import React, { useState } from 'react'
import ReactStars from 'react-stars'
import MyButton from "../MyButton"
import DropDown from './DropDown'
import AnimeService from '../../API/AnimeService'


const AnimeInfo = ({ anime }) => {
  const [isRate, setIsRate] = useState(false)
  const [rating, setRating] = useState(anime.rating)

  const patchAnime = async (rating) => {
    const newAnime = {...anime, rating}
    await AnimeService.patchAnime(newAnime)
  }

  const rate = async (newRating) => {
    console.log(anime)
    setRating((prev) => prev + newRating)
    patchAnime(rating + newRating)
  }
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
        {/* <div className='col-md-1'>
          <h5 className='d-flex align-items-center'>
            <ReactStars
              color1='#ffd700'
              count={1}
              size={24}
              edit={false}
              style={{ PointerEvent: "none" }}
            />
            <span className='mx-2'>{anime.rating > 0 ? anime.rating / 5 : anime.rating}</span>
          </h5>
          <button className='btn btn-success btn-sm' onClick={() => setIsRate(!isRate)}>Оценить</button>
          {isRate
            ? 
              <div className='my-3' style={{ position: "absolute" }}>
                <ReactStars size={24} onChange={(e) => rate(e)}/>
              </div>
            :
              null}
        </div> */}
        <div className='my-5'>
          <h5>{anime.description}</h5>
        </div>
      </div>
    </div>
  )
}

export default AnimeInfo