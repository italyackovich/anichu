import { useContext, useState, useEffect } from 'react'
import MyInput from '../../MyInput'
import { AuthContext } from '../../../context/AuthContext'
import MyButton from '../../MyButton'
import { useParams } from 'react-router-dom'
import { UserIdContext } from '../../../context/UserIdContext'
import CommentService from '../../../API/CommentService'

const EnterComment = ({comments, setComments}) => {
    const params = useParams()
    const {userId} = useContext(UserIdContext)
    // console.log(comments)

    const [newComment, setNewComment] = useState({
        body: "",
        date: new Date().toLocaleString(),
        user_id: userId,
        anime_id: params.id
    })

    const addComm = async () => {
        // console.log(comments)
        setNewComment({...newComment, date: new Date().toLocaleString()})
        await CommentService.postComment(newComment)
        setComments([...comments, newComment])
        setNewComment({body: '', date: new Date().toLocaleString(), user_id: userId, anime_id: params.id})
    }

    const {isAuth} = useContext(AuthContext)
    
    return (
        <div>
            {isAuth
                ? <div className='row my-4'>
                    <div className='col-md-10'>
                        <MyInput
                            className={"form-control bg-dark w-100"}
                            style={{ color: "white" }}
                            type={"text"}
                            placeholder={"Комментарий..."}
                            value={newComment.body}
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