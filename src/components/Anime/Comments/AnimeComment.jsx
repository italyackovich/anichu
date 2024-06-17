import React, { useContext, useEffect, useState } from 'react'
import UserService from '../../../API/UserService'
import { Link, useParams } from 'react-router-dom'
import MyButton from '../../MyButton'
import { UserIdContext } from '../../../context/UserIdContext'
import CommentService from '../../../API/CommentService'
import EnterComment from './EnterComment'

const AnimeComment = ({ comment }) => {

    const {userId} = useContext(UserIdContext)

    const params = useParams()
    const [user, setUser] = useState({})
    const [isAnsw, setIsAnsw] = useState(false)
    const [newAnsw, setNewAnsw] = useState({
        body: "",
        date: new Date().toLocaleString(),
        user_id: userId,
        comment_id: comment.id
    })

    const loadUser = async (id) => {
        const result = await UserService.getById(id)
        setUser(result);
    }

    const loadComments = async (id) => {
        const result = await CommentService.getCommentsByAnimeId(id)
        setNewAnsw(prev => ({...prev, comment_id: result[result.length - 1]?.id}));
    }
    
    useEffect(() =>  {
        loadUser(comment.user_id)
        loadComments(params.id)
    }, [])

    return (
        <div>
            <div>
                <span>
                    <Link className='link-underline link-underline-opacity-0 text-success fs-5'>{user?.username}</Link>
                    <span className='text-secondary'> ({comment.date})</span>
                </span>
                <p>{comment.body}</p>
                <MyButton className={"btn btn-dark btn-sm"} text={isAnsw ? "Отменить" : "Ответить"} onClick={() => setIsAnsw(!isAnsw)}/>
                {isAnsw 
                    ? <EnterComment setIsAnsw={setIsAnsw} bodyState={`@${user.username}`}/>
                    : null}
            </div>
        </div>
    )
}

export default AnimeComment