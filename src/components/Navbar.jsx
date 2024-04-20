import React from 'react'
import MyInput from './MyInput'
import { Link } from 'react-router-dom'
import MyButton from './MyButton'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link class="navbar-brand fs-3" to={"/"}>AniChu</Link>
                    <form className="d-flex">
                        <MyInput 
                            className={"form-control"}
                            type={"search"}
                            placeholder={"Поиск..."}/>
                        <MyButton 
                            text={"Вход"}
                            className={"btn btn-outline-success mx-2"}
                            type={"login"}
                        />
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar