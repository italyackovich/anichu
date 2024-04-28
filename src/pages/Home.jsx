import Navbar from '../components/Navbar'
import MyForm from '../components/MyForm'
import AnimeList from '../components/AnimeList'

const Home = () => {

  return (
    <div>
      <Navbar/>
      <MyForm body={<AnimeList/>} style={{width: "1250px", marginTop:"50px"}}/>
    </div>
  )
}

export default Home