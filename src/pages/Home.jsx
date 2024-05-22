import Navbar from '../components/Navbar'
import MyForm from '../components/MyForm'
import AnimeList from '../components/Anime/AnimeList'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <MyForm body={<AnimeList title={"Что то будет"}/>} style={{width: "1250px", marginTop:"100px"}}/>
    </div>
  )
}

export default Home