import React from 'react'
import MyInput from './MyInput'
import { Link, Navigate, Routes, useNavigate } from 'react-router-dom'
import MyButton from './MyButton'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-3" to={"/"}>
                        <span className="text-white">Ani</span>
                        <b className="text-success">Chu</b>
                    </Link>
                    <form className="d-flex">
                        <MyInput
                            className={"form-control"}
                            type={"search"}
                            placeholder={"Поиск..."} />
                        <MyButton
                            text={"Войти"}
                            className={"btn btn-outline-success mx-2"}
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