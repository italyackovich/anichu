import React, { useContext, useEffect, useState } from 'react'
import { UserIdContext } from '../../context/UserIdContext'
import UserService from '../../API/UserService'
import { useNavigate, useParams } from 'react-router-dom'
import MyButton from '../MyButton'
import List from './List'
import { AuthContext } from '../../context/AuthContext'

const UserInfo = () => {
    const params = useParams()
    const navigate = useNavigate()

    const [isOpenWatching, setIsOpenWatching] = useState(false);
    const [isOpenWillWatching, setIsOpenWillWatching] = useState(false);
    const [isOpenWatched, setIsOpenWatched] = useState(false);

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const [user, setUser] = useState({})
    const getUser = async (id) => {
        const response = await UserService.getById(id)
        console.log(id)
        console.log(response)
        localStorage.setItem('user', JSON.stringify(response))
        setUser(response)
    }

    const logOut = () => {

        setIsAuth(!isAuth)
        localStorage.setItem('isAuth', false)
        navigate("/")
    }

    useEffect(() => {
        getUser(params.id)
    }, [])

    return (
        <div className='container d-flex flex-column align-items-center'>
            <div className='rounded-circle' style={{ width: "150px", height: "150px", overflow: "hidden" }}>
                <img className='img-fluid rounded-circle'
                    src='https://cs12.pikabu.ru/post_img/big/2022/06/30/7/1656586389126295131.jpg'
                    alt='Avatar'
                />
            </div>
            <div className='text-left'>
                <div className='my-3'>
                    <span><b>Email:</b></span>
                    <span className='text-success'> {user.email}</span>
                </div>
                <div>
                    <span><b>Username:</b></span>
                    <span className='text-success'> {user.username}</span>
                </div>
                <div className='my-3'>
                    <span><b>Имя:</b></span>
                    <span className='text-success'> {user.name}</span>
                </div>
                {/* <MyButton className="btn btn-success w-100" text={"Редактировать"} /> */}
                <MyButton className="btn btn-danger my-2 w-100" text={"Выйти"} onClick={()=>{logOut()}}/>
            </div>
            <List user={user}/>
        </div>
    )
}

export default UserInfo