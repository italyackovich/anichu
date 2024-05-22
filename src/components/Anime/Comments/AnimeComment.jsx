import React, { useContext, useEffect, useState } from 'react'
import UserService from '../../../API/UserService'
import AnswerCommentList from './AnswerCommentList'
import { Link, useParams } from 'react-router-dom'
import MyButton from '../../MyButton'
import MyInput from '../../MyInput'
import { UserIdContext } from '../../../context/UserIdContext'
import AnswerService from '../../../API/AnswerService'
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

    // const addAnsw = async () => {
    //     console.log(comment.id)
    //     console.log(comment)
        
        
    //     setNewAnsw(prev => (
    //         {...prev,
    //             date: new Date().toLocaleString(),
    //             comment_id: comment.id
    //         })
    //     )
        
    //     setNewAnsw({body: '', date: new Date().toLocaleString(), user_id: userId, anime_id: params.id, comment_id: comment.id})
    // }

    const loadUser = async (id) => {
        const result = await UserService.getById(id)
        setUser(result);
    }

    const loadComments = async (id) => {
        const result = await CommentService.getCommentsByAnimeId(id)
        setNewAnsw(prev => ({...prev, comment_id: result[result.length - 1]?.id}));
    }

    // const loadAnswers = async (id) => {
    //     const result = await AnswerService.getAnswersByCommentId(id)
    //     console.log(result);
    // }
    
    useEffect(() =>  {
        // console.log(comment)
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
                    // ?   <div className='row my-4'>
                    //         <div className='col-md-6'>
                    //             <MyInput
                    //                 className={"form-control bg-dark"}
                    //                 style={{ color: "white" }}
                    //                 type={"text"}
                    //                 placeholder={"Комментарий..."}
                    //                 value={newAnsw.body}
                    //                 onChange={(e) => setNewAnsw({ ...newAnsw, body: e.target.value })}
                    //             />
                    //         </div>
                    //         <div className='col-md-1'>
                    //             <MyButton className={"btn btn-outline-success"} text={"Отправить"} onClick={() => { addAnsw()}}/>
                    //         </div>
                    //     </div>
                    ? <EnterComment setIsAnsw={setIsAnsw} bodyState={`@${user.username}`}/>
                    : null}
            </div>
            {/* <AnswerCommentList answers={answers} /> */}
        </div>
    )
}

export default AnimeComment