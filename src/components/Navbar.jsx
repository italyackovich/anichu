import React, { useContext, useState } from 'react'
import MyInput from './MyInput'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from './MyButton'
import { AuthContext } from '../context/AuthContext'
import { UserIdContext } from '../context/UserIdContext'


const Navbar = () => {

    const navigate = useNavigate()

    const {isAuth, setIsAuth} = useContext(AuthContext)
    const {userId, setUserId} = useContext(UserIdContext)

    const [isMenu, setIsMenu] = useState(false);

    const setMenu = (e) => {
        e.preventDefault()
        setIsMenu(!isMenu)
    }

    const LogOut = (e) => {
        e.preventDefault()
        setIsAuth(false)
        setUserId(null)
        localStorage.setItem("isAuth", false)
        localStorage.setItem("userId", null)
        navigate("/")
    }

    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <div className='d-flex align-items-center'>
                        <Link className="navbar-brand fs-2 mx-5" to={"/"}>
                            <span className='mx-5'></span>
                            <span className="text-white">Ani</span>
                            <b className="text-success">Chu</b>
                        </Link>
                        <Link className='nav-link mx-5' to={"/catalog"}>
                            <h5>Каталог</h5>
                        </Link>
                    </div>
                    {/* <Link className="navbar-brand fs-2 mx-5" to={"/"}>
                        <span className='mx-5'></span>
                        <span className="text-white">Ani</span>
                        <b className="text-success">Chu</b>
                    </Link>
                    <Link>
                        <b>Каталог</b>
                    </Link> */}
                    <form className="d-flex align-items-center mx-5">
                        <MyInput
                            className={"form-control"}
                            type={"search"}
                            placeholder={"Поиск..."}
                            style={{width: "350px"}}
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
            <div>
                {isMenu
                    ?   <div className='container-fluid'>
                            <MyButton
                                text={"Выход"}
                                className={"btn btn-outline-danger mx-4"}
                                type={"logout"}
                                onClick={LogOut}
                            />
                        </div>
                    : null
                }
            </div>
        </div>
    )
}

export default Navbar