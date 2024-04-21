import React from 'react'
import MyForm from '../components/MyForm'
import Login from '../components/Login'

const Authorization = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '30vh' }}>
                <h1 className='text-center'>
                    <span className="text-white">Ani</span>
                    <b className="text-success">Chu</b>
                </h1>
            </div>
            <MyForm style={{ minWidth: '400px', minHeight: '300px' }} body={<Login/>} />
        </div>
    )
}

export default Authorization