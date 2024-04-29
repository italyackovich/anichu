import React, { useEffect, useState } from 'react'
import UserService from '../../../API/UserService'
import { Link } from 'react-router-dom'

const AnswerComment = ({answer}) => {

    const [user, setUser] = useState({})

    const loadUser = async (id) => {
        const result = await UserService.getById(id)
        setUser(result);
        console.log(user)
    }
    
    useEffect(() => {
        loadUser(answer?.user_id)
        console.log(user)
    }, [])

  return (
    <div className='mx-5'>
        <div>
            <Link className='link-underline link-underline-opacity-0 text-success fs-5'>{user?.username}</Link>
            <p>{answer.body}</p>
        </div>
    </div>
  )
}

export default AnswerComment