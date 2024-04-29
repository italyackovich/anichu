import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyInput from './MyInput';
import MyButton from './MyButton';
import { LogContext } from '../context/LogContext';
import UserService from '../API/UserService';
import { AuthContext } from '../context/AuthContext';
import { UserIdContext } from '../context/UserIdContext';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [newUser, setNewUser] = useState({email: "", password: ""})

    const route = useNavigate();

    const {setIsLogin} = useContext(LogContext)

    const {userId, setUserId} = useContext(UserIdContext)

    const {setIsAuth} = useContext(AuthContext)

    const navigate = () => {
        route("/")
    }

    const logUser = async (e) => {
        e.preventDefault();
        const result = await UserService.getAllUsers()
        if (result.find(user => user.email === newUser.email && user.password === newUser.password) !== undefined) {
            setUserId(result.find(user => user.email === newUser.email && user.password === newUser.password).id)
            setIsAuth(true)
            localStorage.setItem("isAuth", true)
            localStorage.setItem("userId", result.find(user => user.email === newUser.email && user.password === newUser.password).id)
            navigate()
            return
        }
        console.log("Нет")
    }

    return (
        <div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-white">Email</label>
                <MyInput className={"form-control"} type={"email"} placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})}/>
            </div>
            <div className="form-group my-3">
                <label htmlFor="exampleInputPassword1" className="text-white">Пароль</label>
                <MyInput className={"form-control"} type={showPassword ? "text" : "password"} placeholder="Пароль" value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})}/>
                <MyButton text={showPassword ? "Скрыть" : "Показать"} className={"btn btn-outline-secondary w-100 my-3"} type={"password"} onClick={(e) => {e.preventDefault(); return setShowPassword(!showPassword)}}/>
            </div>
            <MyButton text={"Зарегистироваться"} className={"btn btn-outline-secondary w-100"} type={"registration"} onClick={() => setIsLogin(false)}/>
            <MyButton text={"Войти"} className={"btn btn-outline-success w-100 my-3"} type={"login"} onClick={logUser}/>
            <MyButton text={"Отменить"} className={"btn btn-outline-danger w-100"} type={"cancel"} onClick={navigate}/>
        </div>
    )
}

export default Login