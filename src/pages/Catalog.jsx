import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MyForm from '../components/MyForm'
import AnimeService from '../API/AnimeService'
import AnimeCatalog from '../components/Anime/Catalog/AnimeCatalog'
import FilterForm from '../components/Anime/Catalog/FilterForm'
import "../styles/Catalog.sass"
import GenresService from '../API/GenresService'
import { GenresContext } from '../context/GenresContext'

const Catalog = () => {
  // const {animeCon} = useContext(AnimeContext)
  const [anime, setAnime] = useState([]);
  const [genres, setGenres] = useState([]);
  const [dates, setDates] = useState([]);
  const [filteredAnime, setFilteredAnime] = useState([]);

  const findDates = (animeList) => {
    const datesArray = animeList
      .filter(anime => anime.date != null)
      .map(anime => anime.date.slice(anime.date.length - 4));
    setDates(datesArray);
  };

  const handleFilteredAnime = (filteredAnime) => {
    setFilteredAnime(filteredAnime.length > 0 ? filteredAnime : anime);
  };

  const loadGenres = async () => {
    const result = await GenresService.getAllGenres();
    const genresArray = result.map(genre => genre.name);
    setGenres([...new Set(genresArray)]);
    localStorage.setItem("genres", JSON.stringify([...new Set(genresArray)]));
  };

  const loadAnime = async () => {
    const result = await AnimeService.getAllAnime();
    setAnime(result);
    setFilteredAnime(result);
  };

  useEffect(() => {
    loadAnime();
    // const filteredAnime = [...anime]
  }, []);

  useEffect(() => {
    loadGenres();
  }, [])

  useEffect(() => {
    if (anime.length > 0) {
      findDates(anime);
    }
  }, [anime]);

  useEffect(() => {
    if (dates.length > 0) {
      localStorage.setItem("dates", JSON.stringify(dates));
    }
  }, [dates]);

  return (
    <GenresContext.Provider value={{ genres, setGenres }}>
      <div>
        <Navbar/>
        <div className='d-flex justify-content-center'>
          <div className='mx-5'>
            <MyForm body={<AnimeCatalog anime={filteredAnime} />} style={{ width: "1000px", marginTop: "100px" }} />
          </div>
          <MyForm className="filter-form" body={<FilterForm anime={filteredAnime} handleFilteredAnime={handleFilteredAnime} />} style={{ width: "500px", marginTop: "100px" }} />
        </div>
      </div>
    </GenresContext.Provider>
  )
}

export default Catalog