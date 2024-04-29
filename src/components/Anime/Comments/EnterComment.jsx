import React, { useContext, useState } from 'react'
import MyInput from '../../MyInput'
import { AuthContext } from '../../../context/AuthContext'
import MyButton from '../../MyButton'
import { useParams } from 'react-router-dom'
import { UserIdContext } from '../../../context/UserIdContext'
import CommentService from '../../../API/CommentService'

const EnterComment = () => {
    const {userId} = useContext(UserIdContext)
    console.log(userId)
    const params = useParams()
    const [newComment, setNewComment] = useState({
        body: "",
        date: "",
        user_id: "",
        anime_id: params.id
    })

    const addComm = (e) => {
        e.preventDefault()
        const date = new Date()
        setNewComment({...newComment,
            user_id: userId,
            date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        })
        CommentService.postComment(newComment)
        setNewComment({body: "", date: "", user_id: "", anime_id: params.id})
    }

    const {isAuth} = useContext(AuthContext)
    return (
        <div>
            {isAuth
                ? <div className='row my-4'>
                    <div className='col-md-10'>
                        <MyInput
                            className={"form-control form-control-color bg-dark w-100"}
                            style={{ color: "white" }}
                            type={"text"}
                            placeholder={"Комментарий..."}
                            onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
                        />
                    </div>
                    <div className='col-md-2'>
                        <MyButton
                            className={"btn btn-outline-success"}
                            text={"Отправить"}
                            type={"comment"}
                            onClick={addComm}
                        />
                    </div>
                </div>
                : <div className='container text-secondary text-center my-4 fs-4'>
                    <b>Писать комментарии могут только авторизованные пользователи</b>
                </div>
            }
        </div>
    )
}

export default EnterComment