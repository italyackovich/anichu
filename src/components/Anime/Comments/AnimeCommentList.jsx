import React, { useEffect, useState } from 'react'
import AnimeComment from './AnimeComment'
import EnterComment from './EnterComment'

const AnimeCommentList = ({comments}) => {

    return (
      <div className='container align-items-center'>
            <h3>Комментарии</h3>
            <EnterComment/>
            {comments?.map((comment) => 
                <AnimeComment comment={comment} />
            )}
        </div>
    )
}

export default AnimeCommentList