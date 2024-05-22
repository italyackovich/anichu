import React, { useEffect, useState } from 'react'
import AnswerComment from './AnswerComment'

const AnswerCommentList = ({answers}) => {
    return (
        <div className='mx-5'>
            {answers?.slice().reverse()?.map((answer, index) =>
                <AnswerComment key={index} answer={answer}/>
            )}
        </div>
    )
}

export default AnswerCommentList