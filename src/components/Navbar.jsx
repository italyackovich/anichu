import React, { useContext } from 'react'
import MyInput from './MyInput'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from './MyButton'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

    const navigate = useNavigate()

    const {isAuth, setIsAuth} = useContext(AuthContext)

    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2 mx-5" to={"/"}>
                        <span className='mx-5'></span>
                        <span className="text-white">Ani</span>
                        <b className="text-success">Chu</b>
                    </Link>
                    <form className="d-flex mx-5">
                        <MyInput
                            className={"form-control"}
                            type={"search"}
                            placeholder={"Поиск..."}
                            style={{width: "350px"}}
                        />
                        {isAuth
                            ?   <MyButton
                                    text={"Выйти"}
                                    className={"btn btn-outline-danger mx-4"}
                                    type={"logout"}
                                    onClick={(e) =>{ e.preventDefault(); return setIsAuth(false)}}
                                />
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
    )
}

export default Navbar