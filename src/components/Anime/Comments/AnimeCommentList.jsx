import React, { useContext, useEffect, useState } from 'react'
import AnimeComment from './AnimeComment'
import EnterComment from './EnterComment'
import { CommContext } from '../../../context/CommContext'

const AnimeCommentList = ({comments, setComments}) => {
    return (
        <div className='container align-items-center'>
            <h3>Комментарии</h3>
            <EnterComment comments={comments} setComments={setComments}/>
            {comments?.length
                ? comments.slice().reverse()?.map((comment, index) => 
                    <AnimeComment key={index} comment={comment} />)
                : <h3>Комментариев нет</h3>
            }
        </div>
    )
}

export default AnimeCommentList