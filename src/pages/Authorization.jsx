import React, { useState } from 'react'
import MyForm from '../components/MyForm'
import Login from '../components/Login'
import Registration from '../components/Registration'
import { LogContext } from '../context/LogContext'

const Authorization = () => {

    const [isLogin, setIsLogin] = useState(true)
    return (
        <LogContext.Provider value={{isLogin, setIsLogin}}>
            <div>
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '30vh' }}>
                    <h1 className='text-center'>
                        <span className="text-white">Ani</span>
                        <b className="text-success">Chu</b>
                    </h1>
                </div>
                {isLogin
                    ? <MyForm style={{ minWidth: '400px', minHeight: '300px' }} body={<Login/>}/>
                    : <MyForm style={{ minWidth: '400px', minHeight: '300px' }} body={<Registration/>}/>
                }
            </div>
        </LogContext.Provider>
    )
}

export default Authorization