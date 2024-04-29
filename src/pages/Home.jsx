import Navbar from '../components/Navbar'
import MyForm from '../components/MyForm'
import AnimeList from '../components/Anime/AnimeList'

const Home = () => {

  return (
    <div>
      <Navbar/>
      <MyForm body={<AnimeList/>} style={{width: "1250px", marginTop:"80px"}}/>
    </div>
  )
}

export default Home