import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyInput from './MyInput';
import MyButton from './MyButton';
import { LogContext } from '../context/LogContext';
import UserService from '../API/UserService';
import { AuthContext } from '../context/AuthContext';
import { UserIdContext } from '../context/UserIdContext';

const Login = () => {

    const [errors, setErrors] = useState({});

    const [showPassword, setShowPassword] = useState(false);

    const [newUser, setNewUser] = useState({email: "", password: ""})

    const route = useNavigate();

    const {setIsLogin} = useContext(LogContext)

    const {userId, setUserId} = useContext(UserIdContext)

    const {setIsAuth} = useContext(AuthContext)

    const validate = () => {
        const errors = {};
        if (!newUser.email) {
            errors.email = "Введите email.";
        }
    
        if (!newUser.password) {
            errors.password = "Введите пароль.";
        }
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    

    const navigate = () => {
        route("/")
    }

    const logUser = async (e) => {
        e.preventDefault();
        if (!validate()) {
            return
        }
    
        const result = await UserService.getAllUsers();
        const user = result.find(user => user.email === newUser.email && user.password === newUser.password);
        if (user) {
            setUserId(user.id)
            setIsAuth(true)
            localStorage.setItem("isAuth", true)
            localStorage.setItem("userId", user.id)
            navigate()
        } else {
            setErrors({ general: "Неправильный email или пароль" })
        }
    };
    
    return (
        <div>
            <div className="form-group">
                {errors.general && <div className="text-danger">{errors.general}</div>}
                <label htmlFor="exampleInputEmail1" className="text-white">Email</label>
                <MyInput
                    className={"form-control"}
                    type={"email"}
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="form-group my-3">
                <label htmlFor="exampleInputPassword1" className="text-white">Пароль</label>
                <MyInput
                    className={"form-control"}
                    type={showPassword ? "text" : "password"}
                    placeholder="Пароль"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                />
                {errors.password && <div className="text-danger">{errors.password}</div>}
                <MyButton
                    text={showPassword ? "Скрыть" : "Показать"}
                    className={"btn btn-outline-secondary w-100 my-3"}
                    type={"password"}
                    onClick={(e) => { e.preventDefault(); return setShowPassword(!showPassword); }}
                />
            </div>
            <MyButton text={"Зарегистироваться"} className={"btn btn-outline-secondary w-100"} type={"registration"} onClick={() => setIsLogin(false)} />
            <MyButton text={"Войти"} className={"btn btn-outline-success w-100 my-3"} type={"login"} onClick={logUser} />
            <MyButton text={"Отменить"} className={"btn btn-outline-danger w-100"} type={"cancel"} onClick={navigate} />
        </div>
    );
    
}

export default Login