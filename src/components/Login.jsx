import React from 'react'
import { useNavigate } from 'react-router-dom';
import MyInput from './MyInput';
import MyButton from './MyButton';

const Login = () => {
    const route = useNavigate();

    const navigate = () => {
        route("/")
    }
    return (
        <div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-white">Email</label>
                <MyInput className={"form-control"} type={"email"} placeholder="Enter email" />
            </div>
            <div className="form-group my-3">
                <label htmlFor="exampleInputPassword1" className="text-white">Пароль</label>
                <MyInput className={"form-control"} type={"password"} placeholder="Password" />
            </div>
            <MyButton text={"Войти"} className={"btn btn-outline-success w-100 my-3"} type={"login"} />
            <MyButton text={"Отменить"} className={"btn btn-outline-danger w-100"} type={"cancel"} onClick={navigate} />
        </div>
    )
}

export default Login