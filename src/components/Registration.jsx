import React, { useContext, useState } from 'react'
import { LogContext } from '../context/LogContext'
import MyInput from './MyInput'
import MyButton from './MyButton'
import UserService from '../API/UserService'

const Registration = () => {

    const [errors, setErrors] = useState({});

    const [newUser, setNewUser] = useState({
        username: "",
        name: "",
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    const {setIsLogin} = useContext(LogContext)

    const isAllFieldsFilled = (obj) => {
        for (let key in obj) {
          if (obj.hasOwnProperty(key) && !obj[key]) {
            return false;
          }
        }
        return true;
    }

    const validate = () => {
        const errors = {};
        if(!newUser.username) {
            errors.username = "Введите username.";
        }

        if(!newUser.name) {
            errors.name = "Введите имя.";
        }

        if (!newUser.email) {
            errors.email = "Введите email.";
        }
    
        if (!newUser.password) {
            errors.password = "Введите пароль.";
        }
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const regUser = (e) => {
        e.preventDefault();
        if (!validate()) {
            return
        }
        if (!isAllFieldsFilled(newUser)) {
            setErrors({ general: "Заполните все поля" });
            return
        }
        UserService.postUser(newUser)
        setIsLogin(true)
    }


  return (
    <div>
        <div className="form-group my-3">
            <label htmlFor="InputUsername" className="text-white">Username</label>
            <MyInput
                className={"form-control"}
                type={"username"}
                placeholder="Username"
                value={newUser.username}
                onChange={(e) => setNewUser({...newUser, username: e.target.value})}
            />
            {errors.email && <div className="text-danger">{errors.username}</div>}
        </div>
        <div className="form-group">
            <label htmlFor="InputName" className="text-white">Имя</label>
            <MyInput
                className={"form-control"}
                type={"name"}
                placeholder="Имя"
                value={newUser.name}
                onChange={(e) => setNewUser({...newUser, name: e.target.value})}
            />
            {errors.email && <div className="text-danger">{errors.name}</div>}
        </div>
        <div className="form-group my-3">
            <label htmlFor="InputEmail" className="text-white">Email</label>
            <MyInput
                className={"form-control"}
                type={"email"}
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({...newUser, email: e.target.value})}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="form-group">
            <label htmlFor="InputPassword" className="text-white">Пароль</label>
            <MyInput
                className={"form-control"}
                type={!showPassword ? "password" : "text"}
                placeholder="Пароль"
                value={newUser.password}
                onChange={(e) => setNewUser({...newUser, password: e.target.value})}
            />
            {errors.email && <div className="text-danger">{errors.password}</div>}
        </div>
        <MyButton
            text={!showPassword ? "Показать" : "Скрыть"}
            className={"btn btn-outline-secondary w-100 my-3"}
            type={"show"}
            onClick={(e) => {e.preventDefault(); return setShowPassword(!showPassword)}}/>
        <MyButton
            text={"Зарегистироваться"}
            className={"btn btn-outline-success w-100 my-3"}
            type={"reg"}
            onClick={regUser}
        />
        <MyButton
            text={"Отменить"}
            className={"btn btn-outline-danger w-100"}
            type={"cancel"}
            onClick={() => setIsLogin(true)}
        />
    </div>
  )
}

export default Registration