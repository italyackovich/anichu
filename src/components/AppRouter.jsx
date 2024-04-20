import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../pages/Home'
import Authorization from '../pages/Authorization'

const AppRouter = () => {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/login")
    }, [])

    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Authorization />} />
            </Routes>
        </div>
    )
}

export default AppRouter