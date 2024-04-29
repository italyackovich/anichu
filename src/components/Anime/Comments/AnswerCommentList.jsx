import React from 'react'
import AnswerComment from './AnswerComment'

const AnswerCommentList = ({answers}) => {
    return (
        <div className='mx-5'>
            {answers?.map((answer) =>
                <AnswerComment answer={answer}/>
            )}
        </div>
    )
}

export default AnswerCommentList