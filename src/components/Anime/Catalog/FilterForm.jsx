import React, { useContext, useEffect, useState } from 'react'
import "../../../styles/FilterForm.sass"
import { GenresContext } from '../../../context/GenresContext';
// import { DatesContext } from '../../../context/DatesContext';

const FilterForm = ({ anime, handleFilteredAnime }) => {
  const {genres, setGenres} = useContext(GenresContext)
  // const [dates, setDates] = useState(JSON.parse(localStorage.getItem("dates")))
  // const [year, setYear] = useState(Math.min(...dates));

  const [status, setStatus] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [ageRating, setAgeRating] = useState('');

  // const handleSliderChange = (event) => {
  //   setYear(event.target.value);
  // };

  // const findClosestDate = (value) => {
  //   return dates.reduce((prev, curr) => {
  //     return (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev)
  //   })
  // }

  // const sortedDates = [...dates].sort((a, b) => a - b)
  // const minDate = Math.min(...sortedDates)
  // const maxDate = Math.max(...sortedDates)

  // const steps = sortedDates.length > 1 ? sortedDates[1] - sortedDates[0] : 1

  const handleApply = () => {

    console.log('Статус:', status);
    console.log('Жанр:', selectedGenre);
    // console.log('Год выхода:', year);
    console.log('Возрастной рейтинг:', ageRating);

    const filteredAnime = anime.filter(item => {
      const genres = item.genres.map(genre => genre.name)
      return (item.status == status) &&
             (genres.includes(selectedGenre)) &&
            //  (item.date.slice(item.date.length - 4) == year) &&
             (item.ageRating == ageRating);
    })
    console.log(filteredAnime)
    handleFilteredAnime(filteredAnime)
  };

  
  // useEffect(() => {
  //   console.log(genres)
  // }, [])

  return (
    <div>
      <h3>Фильтр</h3>
      <p>Статус</p>
      <select
        id="status"
        className="form-select my-3"
        aria-label="Default select example"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option defaultValue disabled>Выберите статус</option>
        <option value="Онгоинг">Онгоинг</option>
        <option value="Вышел">Вышел</option>
      </select>
      <p>Жанры</p>
      <select
        id='genre'
        className="form-select my-3"
        aria-label="Default select example"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option defaultValue disabled>Выберите жанр</option>
        {genres?.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>
      {/* <p>Год выхода</p> */}
      {/* <label>{year}</label> */}
      {/* <input
        type="range"
        className="form-range"
        min={minDate}
        max={maxDate}
        value={year}
        step={steps}
        id="customRange3"
        onChange={handleSliderChange}/> */}
      <p>Возрастной рейтинг</p>
      <select
        id='ageRating'
        className="form-select my-3"
        aria-label="Default select example"
        value={ageRating}
        onChange={(e) => setAgeRating(e.target.value)}
      >
        <option defaultValue disabled>Выберите статус</option>
        <option value="18+">18+</option>
        <option value="16+">16+</option>
      </select>
      <button className='btn btn-outline-success' onClick={handleApply}>Применить</button>
    </div>
  )
}

export default FilterForm