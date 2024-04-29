import React, { useEffect, useState } from 'react'
import UserService from '../../../API/UserService'
import AnswerCommentList from './AnswerCommentList'
import { Link } from 'react-router-dom'

const AnimeComment = ({ comment }) => {

    const [user, setUser] = useState({})

    const loadUser = async (id) => {
        const result = await UserService.getById(id)
        setUser(result);
    }
    
    useEffect(() => {
        loadUser(comment.user_id)
    }, [])

    return (
        <div>
            <div>
                <Link className='link-underline link-underline-opacity-0 text-success fs-5'>{user?.username}</Link>
                <p>{comment.body}</p>
            </div>
            <AnswerCommentList answers={comment.answerComments} />
        </div>
    )
}

export default AnimeComment