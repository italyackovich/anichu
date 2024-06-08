import Navbar from '../components/Navbar'
import MyForm from '../components/MyForm'
import AnimeList from '../components/Anime/AnimeList'
import { useEffect, useState } from 'react';

const Home = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    setGenres(JSON.parse(localStorage.getItem("genres")))
    console.log(localStorage.getItem("genres"))
    console.log(genres)
  }, [])
  return (
    <div>
      <Navbar/>
      {genres.map((genre, index) => 
        <MyForm key={index} body={<AnimeList title={genre}/>} style={{width: "1250px", maxHeight: "1000px", marginTop:"100px"}}/>
      )}
      {/* <MyForm body={<AnimeList title={"Что то будет"}/>} style={{width: "1250px", marginTop:"100px"}}/> */}
    </div>
  )
}

export default Home