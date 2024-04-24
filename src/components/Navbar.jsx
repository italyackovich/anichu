import React from 'react'
import MyInput from './MyInput'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from './MyButton'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
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
                        <MyButton
                            text={"Войти"}
                            className={"btn btn-outline-success mx-4"}
                            type={"login"}
                            onClick={() => navigate("/login")}
                        />
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar