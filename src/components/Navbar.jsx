import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from './MyButton'
import { AuthContext } from '../context/AuthContext'
import { UserIdContext } from '../context/UserIdContext'
import "../styles/Navbar.sass"
import AnimeService from '../API/AnimeService'
import "../styles/AnimeItem.sass"


const Navbar = () => {

    const navigate = useNavigate()

    const {isAuth, setIsAuth} = useContext(AuthContext)
    const {userId, setUserId} = useContext(UserIdContext)

    const [anime, setAnime] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [isMenu, setIsMenu] = useState(false);

    const loadAnime = async () => {
        setAnime(await AnimeService.getAllAnime())
    }
    

    const searchAnime = useMemo(() => {
        return [...anime]?.filter(anime => anime?.name?.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, anime])

    const handleBlur = () => {
        setTimeout(() => {
            setIsMenu(false);
        }, 500);
    };

    useEffect(() => {
        loadAnime()
    }, [])

    return (
        <div>
            <div>
                <nav className="navbar bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
                    <div className="container-fluid">
                        <div className='d-flex align-items-center'>
                            <Link className="navbar-brand fs-2 mx-5" to={"/"}>
                                <span className='mx-5'></span>
                                <span className="text-white">Ani</span>
                                <b className="text-success">Chu</b>
                            </Link>
                            <Link className='nav-link link-body-emphasis fs-5 mx-5' to={"/catalog"}>
                                <span>Аниме</span>
                            </Link>
                        </div>
                        <form className="d-flex align-items-center mx-5">
                            <input
                                className="form-control"
                                type="search"
                                value={searchQuery}
                                placeholder="Поиск..."
                                style={{width: "350px", padding: "10px 10px 10px 10px"}}
                                onFocus={() => setIsMenu(true)}
                                onBlur={() => handleBlur()}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {isAuth
                                ? 
                                    <div className='rounded-circle mx-5' style={{width: "50px", height: "50px", overflow: "hidden"}}>
                                        <Link to={`/profile/${userId}`} className={"text-decoration-none"}>
                                            <img className='img-fluid rounded-circle'
                                                src='https://cs12.pikabu.ru/post_img/big/2022/06/30/7/1656586389126295131.jpg'
                                                alt='Avatar'
                                            />
                                        </Link>
                                    </div>
                                :   <MyButton
                                        text={"Войти"}
                                        className={"btn btn-outline-success mx-4"}
                                        type={"login"}
                                        onClick={() => navigate("/login")}
                                    />
                            }
                        </form>
                    </div>
                </nav>
            </div>
            {isMenu ?
                <div className='search-list'>
                    {searchAnime.length
                        ?
                        (searchAnime?.map(anime => (
                            <Link key={anime.id}
                                className='link-success link-underline hover-element link-underline-opacity-0'
                                to={`/anime/${anime.id}`}
                            >
                                <div className='item' key={anime.id}>
                                    <img src={anime.img} alt={anime.link} className="rounded mx-3" style={{ width: "70px", height: "100px" }} />
                                    {anime.name}
                                </div>
                            </Link>
                        )))
                        : <div className="text-center align-items-center my-5 text-secondary">Ничего не найдено</div>
                    }
                </div>
                : null
            }
        </div>
    )
}

export default Navbar