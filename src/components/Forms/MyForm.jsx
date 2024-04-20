import React from 'react'
import '../Forms/MyForm.module.css'
import MyButton from '../MyButton'
import MyInput from '../MyInput'
import { useNavigate } from 'react-router-dom'

const MyForm = () => {

    const route = useNavigate();

    const navigate = () => {
        route("/")
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '30vh' }}>
            <form className="p-4 rounded bg-dark shadow-lg" style={{ minWidth: '400px', minHeight: '300px' }}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-white">Email</label>
                    <MyInput className={"form-control"} type={"email"} placeholder="Enter email" />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="exampleInputPassword1" className="text-white">Пароль</label>
                    <MyInput className={"form-control"} type={"password"} placeholder="Password" />
                </div>
                <MyButton text={"Войти"} className={"btn btn-outline-success w-100 my-3"} type={"login"}/>
                <MyButton text={"Отменить"} className={"btn btn-outline-danger w-100"} type={"cancel"} onClick={navigate}/>
            </form>
        </div>
    )
}

export default MyForm