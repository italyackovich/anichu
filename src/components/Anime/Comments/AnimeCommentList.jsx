import React, { useContext, useEffect, useState } from 'react'
import AnimeComment from './AnimeComment'
import EnterComment from './EnterComment'
import { CommContext } from '../../../context/CommContext'

const AnimeCommentList = () => {
    const {comments} = useContext(CommContext)
    return (
      <div className='container align-items-center'>
            <h3>Комментарии</h3>
            <EnterComment/>
            {comments.length
                ? comments.slice().reverse()?.map((comment) => 
                    <AnimeComment key={comment.id} comment={comment} />)
                : <h3>Комментариев нет</h3>
            }
        </div>
    )
}

export default AnimeCommentList