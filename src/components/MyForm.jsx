import React from 'react'

const MyForm = ({style, body}) => {

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '30vh' }}>
            <form className="p-4 rounded bg-dark shadow-lg" style={style}>
                {body}
            </form>
        </div>
    )
}

export default MyForm