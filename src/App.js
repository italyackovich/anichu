import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import AppRouter from './components/AppRouter';
import { AuthContext } from "./context/AuthContext";
import { useEffect, useState } from "react";
import { UserIdContext } from "./context/UserIdContext";
import AnimeService from "./API/AnimeService";
import { AnimeContext } from "./context/AnimeContext";
import GenresService from "./API/GenresService";


function App() {
  
  const [isAuth, setIsAuth] = useState(false)
  const [userId, setUserId] = useState()
  const [anime, setAnime] = useState([])

  const loadAnime = async () => {
    setAnime(await AnimeService.getAllAnime())
  }

  useEffect(() => {
    setIsAuth(JSON.parse(localStorage.getItem("isAuth")))
    setUserId(localStorage.getItem("userId"))
    console.log(userId)
  }, [isAuth, userId])

  useEffect(() => {
    loadAnime()
    localStorage.setItem("anime", JSON.stringify(anime))
    console.log(anime)
  }, [])

  return (
    <div className="App">
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <UserIdContext.Provider value={{userId, setUserId}}>
          <AnimeContext.Provider value={{anime, setAnime}}>
            <BrowserRouter>
              <AppRouter/>
            </BrowserRouter>
          </AnimeContext.Provider>
        </UserIdContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
