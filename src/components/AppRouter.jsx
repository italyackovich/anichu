import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../pages/Home'
import Authorization from '../pages/Authorization'
import Error from '../pages/Error'

const AppRouter = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/")
    }, [])

    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Authorization />} />
                <Route exact parh='/anime/:id' element={<Error/>} />
                <Route exact parh='*' element={<Navigate to={'/'} />}/>
            </Routes>
        </div>
    )
}

export default AppRouter