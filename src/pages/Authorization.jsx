import React from 'react'
import "../components/Forms/MyForm.module.css"
import MyForm from '../components/Forms/MyForm'

const Authorization = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '30vh' }}>
                <h1 className='text-center'>
                    <span className="text-white">Ani</span>
                    <b className="text-success">Chu</b>
                </h1>
            </div>
            <MyForm />
        </div>
    )
}

export default Authorization